import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import "./style.css";
import { instanceAxios } from "../../pages/Main/constants";
import { useAppSelector } from "../../redux/store";
import { useAppDispatch } from "../../redux/store";
import { fetchData } from "../../actions/api";
function CreatePost() {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector((state) => state.user);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const { page } = useAppSelector((state) => state.api.data);
  const handleData: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      if (username.length && title.length && content.length) {
        await instanceAxios.post("/", {
          username,
          title: content,
          content: title,
        });
        dispatch(fetchData(page));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };
  const handleContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="containerCreatePost">
      <p className="headerText">What’s on your mind?</p>
      <div className="containerInputs">
        <label htmlFor="title">Title</label>
        <input
          placeholder="Hello world"
          type="text"
          id="title"
          onChange={handleTitle}
        />
        <label htmlFor="content">Content</label>
        <div className="inputContainer">
          <textarea
            placeholder="John doe"
            id="content"
            onChange={handleContent}
          ></textarea>
        </div>
      </div>
      <button
        className="createButton"
        style={
          !title.length || !content.length
            ? { backgroundColor: "#DDDDDD" }
            : { backgroundColor: "#7695ec" }
        }
        type="submit"
        onClick={handleData}
      >
        ENTER
      </button>
    </form>
  );
}

export default CreatePost;
