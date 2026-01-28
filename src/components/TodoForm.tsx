import { useEffect, useState } from "react";
import type Itask from "../interface/Itask";
import styles from "./TodoForm.module.css";

type Props = {
  taskList: Itask[];
  taskToEdit?: Itask;
  setTaskList?: React.Dispatch<React.SetStateAction<Itask[]>>;
  formBtnText: "create" | "edit";
  handleUpdate?: (id: number, title: string) => void;
};

const TodoForm = ({
  taskList,
  setTaskList,
  formBtnText,
  taskToEdit,
  handleUpdate,
}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [id, setId] = useState<number>();

  useEffect(() => {
    if (taskToEdit) {
      setId(taskToEdit.id);
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleFormSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Logica para validar e adicionar o novo todo
    if (title === "") {
      console.log("Empty todo");
      return;
    }

    if (formBtnText == "create") {
      const newTask: Itask = {
        id: Math.random(),
        title,
      };

      setTaskList!([...taskList, newTask]);
      console.log("new task created", taskList);
    }

    if (formBtnText === "edit") {
      handleUpdate(id, title);
    }

    setTitle("");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.form__input}>
          <label htmlFor="">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">{formBtnText} todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
