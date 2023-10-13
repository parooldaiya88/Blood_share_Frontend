import axios from "axios";
//axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

export const axiosInstance = async (method, endpoint, payload) => {
  try {
    const response = await axios({
      method,
      url: endpoint,
      data: payload,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};


