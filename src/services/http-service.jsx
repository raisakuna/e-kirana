import axiosInstance from "../config/axios.config";

class HttpService {
    setConfig = () => {};
    getConfig =() => {};
  getRequest = () => {};
  postRequest = async (url, data = {}, config) => {
    try {
      const response = await axiosInstance.post(url, data, {});
      return response;
    } catch (exception) {
      console.log("postRequest", exception);
      throw exception;
    }
  };
  putRequest = () => {};
  deleteRequest = () => {};
  patchRequest = () => {};
}
export default HttpService;
