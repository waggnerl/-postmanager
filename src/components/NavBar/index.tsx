import { updateUser } from "../../actions/user";
import { useAppDispatch } from "../../redux/store";
import "./style.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(updateUser(""));
    localStorage.setItem("username", "");
    console.log("hey");
    navigate("/");
  };
  return (
    <nav>
      <p>CodeLeap Network</p>
      <img src="/logout.svg" height={"20px"} alt="" onClick={handleLogout} />
    </nav>
  );
}

export default NavBar;
