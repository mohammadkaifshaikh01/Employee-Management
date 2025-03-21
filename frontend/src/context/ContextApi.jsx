import { createContext, useState, } from "react";


export const Context = createContext();

const ContextApi = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") ? true : false);
  const[token,setToken] = useState(localStorage.getItem("token"));
  const[role,setRole] = useState(localStorage.getItem("role"));
  console.log(token,role,isAuth)

  const value = { isAuth, setIsAuth ,token,setToken,role,setRole}; 

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default ContextApi;