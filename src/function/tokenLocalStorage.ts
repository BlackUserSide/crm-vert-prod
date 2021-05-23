export const checkToken = () => {
  const tocken: string | null = localStorage.getItem("token");
  if (!tocken) {
    return false;
  } else {
    return true;
  }
};
