import { useState, useEffect  } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import {v4} from 'uuid';
import Title from "./components/Title.jsx";

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []
  );

    useEffect (()=> {
      //primeiro parametro nome, segundo parametro: conversão para string
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    // useEffect (() => {
    //   const fetchTasks = async () => {
    //     // Chamar a API
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    //     method: "GET"
    //   })
    //   // Pegar os dados que ela retorna
    //   const data = await response.json();
    //   // Armazenar/persistir esses dados no states
    //   setTasks(data)
    //   }
    //   fetchTasks()
    // }, [])

    function onTaskClick(taskId) {
      const newTask =  tasks.map(task => {
        //preciso atualizar a tarefa
        if (task.id === taskId) {
          return {...task, isCompleted: !task.isCompleted}
        }
        // Não preciso atualizar a tarefa
        return task;
      });
      setTasks(newTask);
    }

    function onDeleteTask(taskId) {
      const newTask = tasks.filter(task => task.id !== taskId )
      setTasks(newTask)
    }

    function onAddTaskSubmit( title, description ) {
      const newTask = {
        id: v4(),
        title,
        description,
        isCompleted: false
      }

      setTasks([...tasks, newTask]);
    }

    return (
      <div className='w-screen h-screen bg-zinc-900 flex  justify-center p-6  '> 
        <div className='w-[500px] space-y-4 h-full '>

          <Title> 
          Gerenciador de Tarefas
          </Title>

          <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask} />
        </div>
      </div>
    );
}
export default App;