import { useEffect, useState } from "react";

import classes from "./AddTimerForm.module.css";

import useInput from "../hooks/use-input";

const AddTimerForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangedHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");

  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  let formIsValid = false;

  if (enteredNameIsValid && enteredDateIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredDateIsValid) {
      return;
    }

    resetNameInput();
    resetDateInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const dateInputClasses = dateInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label>Countdown Name</label>
        <br />
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        ></input>
        {nameInputHasError && (
          <p className={classes["error-text"]}>Name must not be empty.</p>
        )}
      </div>
      <br />
      <label>Pick a date</label>
      <br />
      <div className={dateInputClasses}>
        <input
          id="dateRequired"
          type="date"
          name="dateRequired"
          defaultValue={defaultValue}
          onChange={dateChangedHandler}
          onBlur={dateBlurHandler}
          value={enteredDate}
        />
        {dateInputHasError && (
          <p className={classes["error-text"]}>Date must not be empty.</p>
        )}
      </div>
      <div className={classes["form-actions"]}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default AddTimerForm;
