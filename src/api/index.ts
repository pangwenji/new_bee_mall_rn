/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, {Axios, Method, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

/**
 * 设置全局 拦截
 */
class globalAxios extends Axios {
  protected url;
  private server;
  constructor() {
    super();
    this.setAxiosInstance();
    this.setResponse();
    this.setRequest();
  }

  setAxiosInstance = () => {
    this.server = axios.create({
      baseURL: Config.PRO_API_UI,
      timeout: 3000,
      headers: {
        Accept: 'application/json',
      },
    });
  };
  //设置相应拦截
  setResponse() {
    this.server.interceptors.response.use(
      success => {
        if (success.data) {
          return success.data;
        }
      },
      error => {
        if (error) {
          console.log(error);
          console.log('响应出现错误');
        }
      },
    );
  }
  //设置请求拦截
  setRequest() {
    this.server.interceptors.request.use(
      success => {
        if (success) {
          return success;
        }
      },
      error => {
        if (error) {
          console.log(error, 'yu');
          return Promise.reject('请求出现错误？？？');
        }
      },
    );
  }

  fetch = <T, E>(method: Method = 'get', api?: String, data?: E) => {
    //中间逻辑需要再添加
    return this.sendDataToAxios(method, api, data);
  };
  sendDataToAxios = async (method, api, data) => {
    if (method.toLocaleLowerCase() === 'get') {
      return await this.server[method.toLocaleLowerCase()](api, {
        params: data,
      });
    }
    return await this.server[method.toLocaleLowerCase()](api, data);
  };
}
export default globalAxios;
