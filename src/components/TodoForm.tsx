import { useState } from "react";
import type Itask from "../interface/Itask";

type Props = {
  taskList: Itask[];
  setTaskList: React.Dispatch<React.SetStateAction<Itask[]>>;
  formBtnText: "create" | "edit";
};

const TodoForm = ({ taskList, setTaskList, formBtnText }: Props) => {
  const [title, setTitle] = useState<string>("");

  const handleFormSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Logica para validar e adicionar o novo todo
    if (title === "") {
      console.log("Empty todo");
      return;
    }

    const newTask: Itask = {
      id: Math.random(),
      title,
    };

    setTaskList([...taskList, newTask]);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="">Todo Title:</label>
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
