import { useState, type ReactElement } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import type Itask from "./interface/Itask";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";

const fakeTodo = [
  {
    id: 2,
    title: "ai pai para",
  },
  {
    id: 3,
    title: "Oh daddy stop",
  },
  {
    id: 4,
    title: "Nuuuu vai tomando",
  },
];

const App = (): ReactElement => {
  const [taskList, setTaskList] = useState<Itask[]>(fakeTodo);
  const [todoToEdit, setTodoToEdit] = useState<Itask | null>();

  const hideShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal?.classList.remove("hidden");
    } else {
      modal?.classList.add("hidden");
    }
  };

  const deleteTodo = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
    console.log(taskList);
  };

  const editTodo = (task: Itask) => {
    hideShowModal(true);
    // logica para editar
    setTodoToEdit(task);
  };

  const handleUpdate = (id: number, title: string) => {
    const newTodoData: Itask = {
      id,
      title,
    };

    const updatedList = taskList.map((task) =>
      task.id === id ? newTodoData.title === title : task,
    );

    setTaskList(updatedList);
    setTodoToEdit(null);
  };

  const renderTodos = (tasks: Itask[]): ReactElement => {
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <div key={task.id} className={styles.todo__item}>
              <span>{task.title}</span>
              <div className={styles.actions}>
                <button onClick={() => editTodo(task)}>edit</button>
                <button onClick={() => deleteTodo(task.id)}>delete</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Modal>
        <TodoForm
          formBtnText="edit"
          taskToEdit={todoToEdit}
          taskList={taskList}
          handleUpdate={handleUpdate}
        />
      </Modal>
      <Header />
      <main>
        <div>
          <h2>Create a new todo:</h2>
          <TodoForm
            formBtnText="create"
            setTaskList={setTaskList}
            taskList={taskList}
          />
        </div>
        <div>
          <h2>My todos</h2>
          {taskList.length > 0 ? (
            renderTodos(taskList)
          ) : (
            <div>No Todos yet, create a new todo</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
