import NetworkConfig from "@/config/net.config";
import axios from "axios";
import { getToken, throttleOverdue } from "./auth";
import { useStore } from "@/store/modules/user";

export enum METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export interface ReqHttp {
  url: string;
  ContentType?: EContentType;
}

export interface GetHttp extends ReqHttp {
  method: METHODS.GET;
  params?: any;
}

export interface PostHttp extends ReqHttp {
  method: METHODS.POST;
  data?: any;
}

type RequestHttp = GetHttp | PostHttp;

export type Trequest = <T = any>(arg: RequestHttp) => Promise<RequestParams<T>>;

export enum EContentType {
  form = "application/x-www-form-urlencoded",
  json = "application/json; charset=utf-8",
  multipart = "multipart/form-data",
}

export interface RequestParams<T> extends ObjectBase {
  /**
   * 状态码
   * @type { number }
   */
  code: number;
  /**
   * 数据
   * @type { T }
   */
  data: T;

  /**
   * 数据
   * @type { T }
   */
  rows: T;
  /**
   * 用户令牌
   * @type { string }
   */
  token?: string;
  /**
   * 消息
   * @type { any }
   */
  msg: any;
  /**
   * 区域id
   * @type { string }
   */
  districtId?: string;
  /**
   * 分页总数
   * @type { number }
   * */
  total?: number;
}

const instance = axios.create({
  baseURL: NetworkConfig.host,
  timeout: NetworkConfig.timeout,
});

// 请求拦截
instance.interceptors.request.use(
  (response) => {
    const token = getToken();
    if (token) {
      response.headers.common["Authorization"] = token;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200) {
      throttleOverdue(response.data.code);
      return Promise.resolve(response);
    }
    // 否则的话抛出错误
    return Promise.reject(response);
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      switch (code) {
        case 401:
          console.error("权限不做");
          break;
        case 404:
          console.error("网络请求不存在");
          break;
        default:
      }
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  },
);

// 接口地址 / 请求参数 / 请求方式 / 请求头信息
const request: Trequest = (arg) => {
  const Store = useStore();
  let params = arg.method === METHODS.GET ? arg.params : {};
  let data = arg.method === METHODS.POST ? arg.data : {};
  const url = arg.url;
  const method = arg.method;
  const ContentType = arg.ContentType || EContentType.json;
  if (Store.districtId) {
    switch (arg.method) {
      case METHODS.GET: {
        params = { ...params, districtId: Store.districtId };
        break;
      }
      case METHODS.POST: {
        data = { ...data, districtId: Store.districtId };
        break;
      }
      default: {
        console.log(arg);
      }
    }
  }
  return new Promise((resolve, reject) => {
    instance({
      url,
      params,
      data,
      method,
      headers: {
        "Content-Type": ContentType,
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => reject(error));
  });
};

// const request: Trequest = ({
//   url,
//   params = {},
//   method = METHODS.GET,
//   data = {},
//   ContentType = EContentType.json,
// }) => {
//   const Store = useStore();
//   if (Store.districtId) {
//     switch (method) {
//       case METHODS.GET: {
//         params = { ...params, districtId: Store.districtId };
//         break;
//       }
//       case METHODS.POST: {
//         data = { ...data, districtId: Store.districtId };
//         break;
//       }
//     }
//   }
//   return new Promise((resolve, reject) => {
//     instance({
//       url,
//       params,
//       data,
//       method,
//       headers: {
//         "Content-Type": ContentType,
//       },
//     })
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((error) => reject(error));
//   });
// };
export { request };
export default instance;
