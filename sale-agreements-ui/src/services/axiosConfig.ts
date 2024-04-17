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
    console.log(process.env.MARKO);

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
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
