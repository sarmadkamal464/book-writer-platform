// handle Input Change.

import moment from "moment";
import { loginWith3rdParty } from "../api/thirdPartyLogin";
import { UNABLE_TO_CONTINUE } from "../utils/messages";
import { showToast } from "./tosat";

export const handleChange = (event, stateData, setStateData) => {
  const { name, value } = event.target;
  setStateData({
    ...stateData,
    [name]: value,
  });
};

function payloadProcessorFor3rdParty(response, provider) {
  const payload = {};

  if (response.name) {
    // Check if there is a name in the response
    const nameParts = response.name.split(/[ -]/); // Split name using whitespace or hyphen

    // Save the first index into first_name and concatenate the rest into last_name
    payload.first_name = nameParts[0];
    payload.last_name = nameParts.slice(1).join(" ");

    // If there's only one index, check for family_name or last_name in the response
    if (nameParts.length === 1) {
      if (response.family_name) {
        payload.last_name = response.family_name;
      } else if (response.last_name) {
        payload.last_name = response.last_name;
      } else {
        payload.last_name = payload.first_name;
      }
    }
  } else if (response.login) {
    // Check if there is a login in the response (for GitHub)
    const nameParts = response.login.split(/[ -]/); // Split name using whitespace or hyphen

    // Save the first index into first_name and concatenate the rest into last_name
    payload.first_name = nameParts[0];
    payload.last_name = nameParts.slice(1).join(" ");

    // If there's only one index, check for family_name or last_name in the response
    if (nameParts.length === 1) {
      if (response.family_name) {
        payload.last_name = response.family_name;
      } else if (response.last_name) {
        payload.last_name = response.last_name;
      } else {
        payload.last_name = payload.first_name;
      }
    }
  }

  if (response.sub) {
    // Check if response has sub, id, or userId and assign to third_party_user_id
    payload.third_party_user_id = response.sub;
  } else if (response.id) {
    payload.third_party_user_id = response.id;
  } else if (response.userId) {
    payload.third_party_user_id = response.userId;
  }

  payload.third_party_type = provider; // Assign third_party_type as provider

  if (response.email) {
    // Check and assign email from the response
    payload.email = response.email;
  } else {
    showToast("No email found! Need to add email.", "error"); // If email is null, show a toast and return an empty payload
    return {};
  }

  return payload;
}

export const handle3rdPartyIntegration = (response, dispatch, provider) => {
  const payload = payloadProcessorFor3rdParty(response, provider);
  if (Object.keys(payload).length) {
    dispatch(loginWith3rdParty(payload))
      .then((response) => {
        if (!response.data.success) {
          if (response.data.message.error) {
            const errors = response.data.message.error;
            const errorMessages = Object.values(errors).join(", ");
            showToast(errorMessages, "error");
          } else {
            showToast(response.data.message, "error");
          }
        }
      })
      .catch((error) => {
        showToast(UNABLE_TO_CONTINUE, "error");
      });
  }
};

export const truncateText = (title, words) => {
  const wordArray = title.split(" ");
  if (wordArray.length > words) {
    return wordArray.slice(0, words).join(" ") + "...";
  }
  return title;
};

export const getFullDate = (date, format) => {
  return moment(date).format(format);
};

export const getFirstCharacter = (inputString) => {
  return inputString?.charAt(0);
};

export const countPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};
