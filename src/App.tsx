import { useState, type ReactElement } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import type Itask from "./interface/Itask";
import TodoForm from "./components/TodoForm";

const App = (): ReactElement => {
  const [taskList, setTaskList] = useState<Itask[]>([]);

  return (
    <div className={styles.container}>
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
        <div>list all todos</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
