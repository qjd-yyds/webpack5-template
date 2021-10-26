import { useStore } from "@/store/modules/user";
import { throttle } from "./tool";
import Cookies from "js-cookie";
import { Modal } from "ant-design-vue";

const TokenKey = "Admin-Token";
// 获取权限
export function getToken() {
  const store = useStore();
  // 获取缓存中的token数据，如果存在则读取
  if (sessionStorage.token) {
    setToken(sessionStorage.token, sessionStorage.districtId);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("districtId");
  }
  return store.token || "";
}
// 设置权限
export function setToken(token: string, districtId = "") {
  const store = useStore();
  Cookies.set(TokenKey, token);
  store.SET_TOKEN(token);
  store.SET_DISTRICTID(districtId);
  // 刷新浏览器前将数据存储到 sessionStorage
  window.addEventListener(
    "beforeunload",
    () => {
      sessionStorage.setItem("token", store.token);
      sessionStorage.setItem("districtId", store.districtId);
    },
    {
      once: true,
    },
  );
}

// 去除权限
export function removeToken() {
  const store = useStore();
  store.SET_TOKEN("");
  store.SET_DISTRICTID("");
  // 去除token 刷新浏览器
  window.location.reload();
}

// 用户过期处理
function overdue(code: number) {
  if (code === 401) {
    Modal.warning({
      title: () => "提示",
      content: () => "当前用户过期！，点击确认重新登陆！",
      okText: "确认",
      onOk() {
        removeToken();
        Modal.destroyAll();
      },
    });
    return true;
  }
  return false;
}
export const throttleOverdue = throttle(overdue, 500);
