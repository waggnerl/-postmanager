import "./style.css";
import { Props } from "./types";

function ModalDelete({ children }: Props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">{children}</div>
    </div>
  );
}

export default ModalDelete;
