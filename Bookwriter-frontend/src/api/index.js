import axios from "axios";
import { baseURL } from "../utils/constant";

axios.defaults.baseURL = baseURL;

export default axios;
