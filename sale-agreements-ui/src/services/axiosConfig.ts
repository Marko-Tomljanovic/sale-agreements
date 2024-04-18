import axios from "axios";

let hostname: string = "";

if (process.env.NODE_ENV === "production") {
  hostname = "https://sale-agreements.onrender.com";
} else if (process.env.NODE_ENV === "test") {
  hostname = "https://sale-agreements.onrender.com";
} else if (process.env.NODE_ENV === "development") {
  hostname = "http://localhost:5000";
}

export const axiosInstance = axios.create({
  baseURL: `${hostname}/api`,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (!error.response) {
      console.log("Network error");
    }
    return Promise.reject(error);
  }
);
