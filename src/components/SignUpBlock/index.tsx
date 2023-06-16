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
        <button
          style={
            !userName.length
              ? { backgroundColor: "#DDDDDD" }
              : { backgroundColor: "#7695ec" }
          }
          type="submit"
          onClick={handleData}
        >
          ENTER
        </button>
      </form>
    </div>
  );
}

export default SignUpBlock;
