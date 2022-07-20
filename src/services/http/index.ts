import axios, { Axios } from "axios";
import { STATUS_CODE_UNAUTHORIZED } from "../../ts/enum/http";
import { PageRoutes } from "../../ts/enum";
import { authInterceptor } from "../interceptors";

export class HttpService {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axios.interceptors.request.use(authInterceptor);

    this.axios.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        if (error.response.status === STATUS_CODE_UNAUTHORIZED) {
          window.location.href = PageRoutes.Login;
          return;
        }

        return Promise.reject(error.response.data);
      }
    );
  }

  public getInstance() {
    return this.axios;
  }
}

const Http = new HttpService();

export default Http.getInstance();
