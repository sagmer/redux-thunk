import classes from "./StatusBar.module.css";

const StatusBar = ({ status }) => {
  return <div className={classes.status}>{status}</div>;
};

export default StatusBar;