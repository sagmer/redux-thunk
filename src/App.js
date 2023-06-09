import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Counter from "./components/Counter";
import StatusBar from "./components/StatusBar"

function App() {
  const counter= useSelector(state=>state.counter)
  const notification = useSelector(state=>state.notification)
  useEffect(() => {
    const sendRequest = async () => {
      await fetch(
        "https://mediumprojects-f255b-default-rtdb.firebaseio.com/counter.json",
        {
          method: "PUT",
          body: JSON.stringify(counter),
        }
      );
    };
    sendRequest();
  }, []);
  return (
    <div className="App">
      <Counter />
      <StatusBar status={notification.status} />
    </div>
  );
}

export default App;
