import { REQUIRED } from "../../../../../utils/messages";

export const validationRules = [
  {
    field: "title",
    regex: /^.{1,}$/,
    errorMessage: `Title ${REQUIRED}`,
  },
  {
    field: "description",
    regex: /^.{1,}$/,
    errorMessage: `Description ${REQUIRED}`,
  },
  {
    field: "image",
    regex: /^.{1,}$/,
    errorMessage: `image ${REQUIRED}`,
  },
];
