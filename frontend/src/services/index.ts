import api from "../api/request";

const Service = {
  getTasks: async (): Promise<ITask[]> => {
    const res = await api.get('/tasks');
    const tasks: ITask[] = res.data as ITask[];
    return tasks;
  },
  createTasks: async (task: ITask): Promise<any> => {
    const res = await api.post('/tasks', { task });
    return res;
  }
}

export default Service;
