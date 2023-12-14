import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../api";

interface IUser {
  id: string,
  username: string,
  email: string,
  avatar: string
}

interface IAuthContext {
  user?: IUser,
  login: (email: string, password: string) => Promise<void>,
  logout: () => void
}

interface Props {
  children: ReactNode
}

interface IResponseData {
  token: string
  userData?: IUser,
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({children}: Props) {
  const [user, setUser] = useState<IUser>();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("login", {
        email, password
      });
      const data = response.data as IResponseData;

      const token = data.token;
      const user = data.userData;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("auth.token", token);
      
      setUser(user);
      localStorage.setItem("auth.user", JSON.stringify(user));
    } catch(err) {
      console.log(err);
    }
  }

  const logout = () => {
    api.defaults.headers.common.Authorization = "";
    localStorage.removeItem("auth.token");

    setUser(undefined);
    localStorage.removeItem("auth.user");
  }

  useEffect(() => {
    const token = localStorage.getItem("auth.token");
    const user = localStorage.getItem("auth.user");

    if(token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
