import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    //if user not exist, render AuthPage
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else //if user does exist, render ChatsPage and use data user
   {
    return <ChatsPage user={user} />;
  }
}

export default App;