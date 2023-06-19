import { MouseEventHandler } from "react";
import { instanceAxios } from "../../pages/Main/constants";
import "./style.css";
import { Props } from "./types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchData } from "../../actions/api";

function ModalDelete({ setModalOpen, id }: Props) {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.api.data);

  const handleDeleteData: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      await instanceAxios.delete(`/${id}/`);
      dispatch(fetchData(page));
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="titleCloseBtn">
      <div className="title">
        <p>Are you sure you want to delete this item?</p>
      </div>
      <div className="footerDelete">
        <button
          className="cancelButton"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Cancel
        </button>
        <button className="deleteButton" onClick={handleDeleteData}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ModalDelete;
