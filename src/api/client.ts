import { request } from ".";
export interface Ires {
  data: any;
  status: number;
}
export const getClient = async () => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "GET",
    url: `/client/get_client/`,
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
export const changeDesc = async (data: any) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/client/post_desc/${data.id}`,
    data: { desc: data.desc },
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
export const changeCard = async (data: any) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/client/post_card/${data.id}`,
    data: { card: data.card },
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
export const changeStatus = async (status: number, id: number) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/client/update_status`,
    data: { status: status, clientId: id },
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
