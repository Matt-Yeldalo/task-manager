import { useState } from "react";

export const Form = (props: any) => {
  const {submitCallback} = props;
  const [task, setTask] = useState({
    title: '',
    body: ''
  });
  // On input change
  const handleChange = (e: any) => {
    setTask((prev) => ({ 
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  // On submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitCallback(task);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" value={task.title} onChange={handleChange} />
        <input name="body" value={task.body} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
