import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { instanceAxios } from "../../pages/Main/constants";
import "./style.css";
import { Props } from "./types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchData } from "../../actions/api";

function ModalDelete({ setModalOpen, id }: Props) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.api.data);

  const handleData: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      instanceAxios.patch("/", {
        id,
        title,
        content,
      });
      dispatch(fetchData(page));
      setModalOpen(false);
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
    <form className="containerEditPost">
      <p className="headerText">Edit item</p>
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
      <div className="footerEdit">
        <button
          className="cancelButton"
          type="submit"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </button>
        <button className="saveButton" type="submit" onClick={handleData}>
          Save
        </button>
      </div>
    </form>
  );
}

export default ModalDelete;
