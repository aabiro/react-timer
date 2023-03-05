import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import AddTimerForm from './AddTimerForm';

import classes from './AddTimer.module.css';

const AddTimer = () => {
  const [showModal, setShowModal] = useState(false);

  const newCountdownHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Card>
      Add a Countdown Event
      {showModal && (
        <Modal onClose={newCountdownHandler}>
          <AddTimerForm></AddTimerForm>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>27.99</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={newCountdownHandler}>
              Close
            </button>
            {<button className={classes.button}>Order</button>}
          </div>
        </Modal>
      )}
      <button className={classes.button} onClick={newCountdownHandler}>New Countdown</button>
    </Card>
  );
};

export default AddTimer;
