import styles from "./InstanceWindow.module.css"
import {useState} from "react";

function InstancePicture(props) {
    const [enteredDate, setEnteredDate] = useState('');

  return (
    <div>
    <div className={styles.instance__pictureContainer}>
      <button className={styles.instance__picture}>picture</button>
    </div>
    <button className={styles.cancel__button} type="button" onClick={props.onCancel}>cancel</button>
  </div>
  );
}

export default InstancePicture;