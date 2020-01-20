import React from "react";
/* default export can have without class name */
export default React.createContext({
  isAuth: false,
  toggleAuth: () => {},
  isRole: false,
  toggleRole: () => {}
});
