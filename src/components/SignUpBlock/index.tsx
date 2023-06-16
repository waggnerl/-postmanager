import { useState, ChangeEventHandler, MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { create } from "../../actions/user";
import "./style.css";

function SignUpBlock() {
  const name = useAppSelector((state) => state.user.name);
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  const handleData: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    dispatch(create(userName));
  };

  const handleName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="container">
      <form className="signUpForm">
        <p>Welcome to CodeLeap network</p>
        <label>Please enter your username</label>
        <input type="text" name="name" onChange={handleName} />
        <button type="submit" onClick={handleData}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default SignUpBlock;
