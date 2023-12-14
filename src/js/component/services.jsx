const endpointGetList =
  "https://playground.4geeks.com/apis/fake/todos/user/speed92xmax";

export const fetchList = async (action) =>
  await fetch(endpointGetList)
    .then((res) => res.json())
    .then((res) => {
      action(res);
    });

export const editListFetch = async (params) =>
  await fetch(endpointGetList, params)
    .then((res) => res.json())
    .then((res) => {
      alert(`${res.msg}`);
      fetchList();
    });
