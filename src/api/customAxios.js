import axios from "axios";

const JSON_BASE_URL = "https://jsonplaceholder.typicode.com";
/* eslint-disable no-console */
const instance = axios.create({
  baseURL: JSON_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Max-Age": 600 // 10 mins
  }
});

// Global axios defaults
// Now all requests using this instance will wait 2.5 seconds before timing out
// instance.defaults.timeout = 5000;
// instance.defaults.crossDomain = true;
// instance.defaults.headers.post["Content-Type"] = "application/json";
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
// Add a request interceptor
instance.interceptors.request.use(
  request => {
    // console.log(request);
    // Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
// If we want to remove interceptor
// instance.interceptors.request.eject(reqInterceptor);

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // console.log(response);
    // Do something with response data
    const { status } = response;
    // const resp = this.transformer(response);
    if (status === 200) {
      return response;
    } else {
      throw new Error(response);
    }
  },
  error => {
    // response error handling
    console.log(error);
    if (error.response && error.response.status === 503) {
      // redirect to some page
    }
    console.error(`%c Server ERROR: ${error}`, "background: #f00; color: #fff");
    // Do something with response error
    return Promise.reject(error);
  }
);
/*
transformer(data){
  let resp;
  try {
        resp = JSON.parse(data)
      } catch (error) {
        throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
      }

      if (resp.status === 'success') {
        return resp.data
      } else {
        throw Error(`[requestClient] Request failed with reason -  ${data}`)
      }
};*/

export default instance;
/* eslint-enable no-console */
