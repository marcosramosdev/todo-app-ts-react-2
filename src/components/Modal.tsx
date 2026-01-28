import type { ReactElement } from "react";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props): ReactElement => {
  const closeModal = () => {
    const modal = document.querySelector("#modal");
    console.log("ai fui clicado", modal);
    modal!.classList.toggle("hidden");
  };

  return (
    <div id="modal">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Edit Task</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
