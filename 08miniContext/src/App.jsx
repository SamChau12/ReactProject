import { useState } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
//last step
function App() {
  return (
    <UserContextProvider>
      <h1>Context Api </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
