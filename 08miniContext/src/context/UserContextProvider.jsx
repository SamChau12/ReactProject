//one way for creating provider
//second step
import React from "react";
import UserContext from "./UserContext";
//prop i.e children
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null); //// Store user as an object
  //object is passed in value
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} /*App.jsx is render here */
    </UserContext.Provider>
  );
};
export default UserContextProvider;
