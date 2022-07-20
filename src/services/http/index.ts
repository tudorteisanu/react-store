import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { PageRoutes } from "../../ts/enum";

export class HttpService {
  private axios: Axios;
  config: AxiosRequestConfig;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://api.nanoit.dev/",
    });

    this.config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  public setToken(): HttpService {
    const token = localStorage.getItem("token");
    this.config.headers = {
      ...this.config.headers,
      Authorization: `Bearer ${token}`,
    };
    return this;
  }

  public async get(
    url: string,
    params: Record<string, string> = {}
  ): Promise<any> {
    try {
      const response = await this.axios.get(url, {
        params,
        ...this.config,
      });
      return response.data;
    } catch (e: any) {
      if (e.response.status === 401) {
        window.location.href = PageRoutes.Login;
      }
      return e.response.data;
    }
  }

  public setHeaders(headers: Record<string, string>): HttpService {
    this.config.headers = {
      ...this.config.headers,
      ...headers,
    };
    return this;
  }

  public async post(url: string, data: object): Promise<AxiosResponse> {
    try {
      const response = await this.axios.post(url, data, { ...this.config });
      return response.data;
    } catch (e: any) {
      throw e?.data;
    }
  }

  public async delete(url: string, data: object = {}): Promise<AxiosResponse> {
    try {
      const response = await this.axios.delete(url, { data });
      return response.data;
    } catch (e: any) {
      throw e?.data;
    }
  }
}

export default new HttpService();
