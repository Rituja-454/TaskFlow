import { createContext, useState, useContext, useEffect } from 'react';
import taskAPI from '../services/taskAPI';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await taskAPI.getAllTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    setLoading(true);
    setError(null);
    try {
      const newTask = await taskAPI.createTask(task);
      setTasks([newTask, ...tasks]);
      return newTask;
    } catch (err) {
      setError(err.message);
      console.error('Error adding task:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, updatedTask) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await taskAPI.updateTask(id, updatedTask);
      setTasks(tasks.map(task => task._id === id ? updated : task));
      return updated;
    } catch (err) {
      setError(err.message);
      console.error('Error updating task:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await taskAPI.deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError(err.message);
      console.error('Error deleting task:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getTask = (id) => {
    return tasks.find(task => task._id === id);
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, updateTask, deleteTask, getTask, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
