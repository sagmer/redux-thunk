import { useSelector } from "react-redux";

import classes from "./StatusBar.module.css";

const StatusBar = (props) => {
  const notification = useSelector((state) => state.notification);
  return <div className={classes.status}>{notification.status}</div>;
};

export default StatusBar;
