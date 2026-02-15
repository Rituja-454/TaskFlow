import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import './TaskForm.css';

export default function AddTask() {
  const navigate = useNavigate();
  const { addTask } = useTasks();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await addTask(formData);
        navigate('/tasks');
      } catch (err) {
        alert('Failed to create task: ' + err.message);
      }
    }
  };

  const handleCancel = () => {
    navigate('/tasks');
  };

  return (
    <div className="task-page">
      <header className="task-header">
        <div className="container">
          <div className="task-header-content">
            <Link to="/tasks" className="back-link">← Back to Tasks</Link>
            <h1>Add New Task</h1>
          </div>
        </div>
      </header>

      <main className="task-main">
        <div className="container">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="task-form">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Task Title <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`form-input ${errors.title ? 'error' : ''}`}
                  placeholder="Enter task title"
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description <span className="required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`form-textarea ${errors.description ? 'error' : ''}`}
                  placeholder="Enter task description"
                  rows="4"
                />
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="status" className="form-label">
                  Status <span className="required">*</span>
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
