import { useState } from "react";

import "./App.css";

import AuthPage from "./pages/authenticate/Authenticate";
import ChatsPage from "./pages/chatPage/ChatePage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}



export default App
