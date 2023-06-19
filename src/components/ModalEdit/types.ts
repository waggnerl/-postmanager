import { Dispatch, SetStateAction } from "react";

export type Props = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
};
