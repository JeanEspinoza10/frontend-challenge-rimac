import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"; 

type User = {
  name: string;
  lastName: string;
  birthDay: string;
  planSelect: string;
  planPrice: number ;
  phone: string;
  nroDoc:string;
};

type DataContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

type DataProviderProps = {
  children: ReactNode;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }: DataProviderProps)=>{
  const [user, setUser] = useState({
  name: "",
  lastName: "",
  birthDay: "",
  planSelect :"",
  planPrice: 0,
  phone:"",
  nroDoc:""
  })


  return (
    <DataContext.Provider value={{ user, setUser}}>
      {children}
    </DataContext.Provider>
  );

}