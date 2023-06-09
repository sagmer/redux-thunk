import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { changeCounter, counterActions } from "../store/counter-slice";

const Counter = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className={classes.content}>
      <div className={classes.buttons}>
        <button
          className={classes.button}
          onClick={() => {
            dispatch(changeCounter(counter.value+1, "inc"));
          }}
        >
          increment
        </button>
        <button
          className={classes.button}
          onClick={() => {
            dispatch(changeCounter(counter.value-1, "dec"));
          }}
        >
          decrement
        </button>
      </div>
      <div className={classes.counter}>counter: {counter.value}</div>
    </div>
  );
};

export default Counter;
