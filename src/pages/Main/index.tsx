import NavBar from "../../components/NavBar";
import CreatePost from "../../components/CreatePost";
import "./style.css";
function Main() {
  return (
    <div className="containerMain">
      <div className="containerLimitWidth">
        <NavBar />
        <CreatePost />
      </div>
    </div>
  );
}

export default Main;
