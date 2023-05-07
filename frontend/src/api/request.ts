import axios, { AxiosResponse, Method } from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};

export default request;