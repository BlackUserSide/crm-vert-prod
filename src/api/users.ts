import { request } from ".";
export interface Ires {
  data: any;
  status: number;
}
export const loginUser = async (data: any) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/auth`,
    data: {
      login: data.login,
      password: data.password,
    },
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const getDataUser = async () => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "GET",
    url: `/user/getOne`,
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const cahangePass = async (password: string) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "PUT",
    url: `/admin/update_password`,
    data: { password: password },
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
