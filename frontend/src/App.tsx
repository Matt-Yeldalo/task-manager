import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import Service from "./services";
function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]); 

  useEffect(() => {
    const loadArticles = async () => {
      const res = await Service.getTasks();
      setTasks(res);
    }
    loadArticles();
  }, []);

  const handleFormSubmit = async (formData: ITask) => {
    console.log(formData);
    const res = await Service.createTasks(formData);
    const newTask: ITask = res.data;
    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <div className='app-container'>
      <ul>
        {tasks.map((task, index) => 
          <li key={index}>
            {task.title} - {task.body} 
            </li>
        )
        }
      </ul>
      <Form submitCallback={handleFormSubmit}/>
    </div>
  )
}

export default App
