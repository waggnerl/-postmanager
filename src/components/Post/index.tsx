import "./style.css";
import { DataPost } from "./types";
import { getPostDate } from "./utils";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";
import Modal from "../Modal";
import { useState } from "react";
import { useAppSelector } from "../../redux/store";
function Post({ id, username, title, content, date }: DataPost) {
  const [modalDeleteOpen, setModaDeletelOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const { username: usernameOfUser } = useAppSelector((state) => state.user);

  if (modalDeleteOpen)
    return (
      <Modal>
        <ModalDelete id={id} setModalOpen={setModaDeletelOpen} />
      </Modal>
    );
  if (modalEditOpen)
    return (
      <Modal>
        <ModalEdit id={id} setModalOpen={setModalEditOpen} />
      </Modal>
    );

  return (
    <div className="containerPost">
      <div className="containerTop">
        <div className="containerTopContent">
          <p>{title}</p>
          <div
            style={
              usernameOfUser === username
                ? { display: "block" }
                : { display: "none" }
            }
            className="containerIcons"
          >
            <img
              style={{ paddingRight: "34.2px" }}
              onClick={() => {
                setModaDeletelOpen(true);
              }}
              src="/ic_baseline-delete-forever.svg"
            />
            <img
              onClick={() => {
                setModalEditOpen(true);
              }}
              src="/bx_bx-edit.svg"
            />
          </div>
        </div>
      </div>
      <div className="containerBodyContent">
        <div className="containerTopBodyContent">
          <p>@{username}</p>
          <p>{getPostDate(date)} minutes ago</p>
        </div>
        <div className="containerDownBodyContent">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
