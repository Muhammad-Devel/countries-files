import loaderToggle from "./loader";

const request = async (resource) => {
  loaderToggle(true);
  const req = await fetch(resource);
  if (!req.ok) {
    throw new Error("Something wait wrong !!!");
  }
  const data = await req.json();
  loaderToggle(false);
  return data;
};

export default request;
