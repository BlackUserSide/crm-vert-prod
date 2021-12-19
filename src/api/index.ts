import axios from "axios";

const url = "http://192.168.35.161:8000/api/";
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {},
});
export const request = (params: any, allowStatus: number[] = [200]) =>
  instance(params).catch((e) => {
    const { status } = e.response;
    if (allowStatus.indexOf(status) === -1) {
      console.log(status);
    }
  });
export const setBearerToken = (token: string) => {
  instance.defaults.headers["x-access-token"] = `${token}`;
  localStorage.setItem("token", token);
};
function restoreToken() {
  const token = localStorage.getItem("token");
  if (token) {
    setBearerToken(token);
  }
}
restoreToken();
