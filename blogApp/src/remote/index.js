import Axios from "axios";

Axios.defaults.baseURL = "http://172.30.1.40:3002";

// eslint-disable-next-line
export const search = (param) => Axios.get(`/api/app/v1/blog?${param}`);

export default Axios;
