// utils/cookieManager.js

import nookies from "nookies";

const setCookie = (key, value, options = {}) => {
  nookies.set(null, key, value, {
    maxAge: 30 * 24 * 60 * 60, // Durée par défaut de 30 jours
    path: "/",
    ...options,
  });
};

const getCookie = (key) => {
  const cookies = nookies.get(null);
  return cookies[key] || "";
};

const destroyCookie = (key) => {
  nookies.destroy(null, key);
};

export { setCookie, getCookie, destroyCookie };
