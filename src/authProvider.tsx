import { AuthProvider } from "react-admin";

const authority = "https://authority.eldoriantales.com/login";
// const authority = "http://localhost:5005/login";

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const request = new Request(authority, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        console.warn(auth);
        localStorage.setItem("auth", auth.token);
        return auth;
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  //   getIdentity: () => Promise.resolve({}),
  getPermissions: () => Promise.resolve(""),
};
