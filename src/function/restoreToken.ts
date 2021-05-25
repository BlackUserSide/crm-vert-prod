export const restoreToken = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
