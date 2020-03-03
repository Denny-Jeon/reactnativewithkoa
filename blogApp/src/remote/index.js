import Axios from "axios";
import { RemoteHost } from "../utils";

// eslint-disable-next-line
export const search = (param) => Axios.get(`${RemoteHost}/api/app/v1/blog?${param}`);
