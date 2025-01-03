import axios from "axios";
import Common from "../util/Common";

const AxiosInstance = axios.create({
  baseURL: Common.KH_DOMAIN,
});
