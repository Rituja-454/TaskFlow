const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class TaskAPI {
  // Get all tasks
  async getAllTasks() {
    try {
      const response = await fetch(`${API_URL}/tasks`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch tasks');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  }

  // Get single task
  async getTask(id) {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch task');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error fetching task:', error);
      throw error;
    }
  }

  // Create new task
  async createTask(taskData) {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to create task');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }

  // Update task
  async updateTask(id, taskData) {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to update task');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  }

  // Delete task
  async deleteTask(id) {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to delete task');
      }
      
      return data.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
}

export default new TaskAPI();
