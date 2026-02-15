import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import './TaskTable.css';

export default function TaskTable() {
  const navigate = useNavigate();
  const { tasks, deleteTask, loading, error } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || task.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(id);
      } catch (err) {
        alert('Failed to delete task: ' + err.message);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/tasks/edit/${id}`);
  };

  const handleAddTask = () => {
    navigate('/tasks/add');
  };

  return (
    <div className="task-page">
      <header className="task-header">
        <div className="container">
          <div className="task-header-content">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1>Main Task Table</h1>
          </div>
        </div>
      </header>

      <main className="task-main">
        <div className="container">
          <div className="task-controls">
            <div className="search-box">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="All">Filter: All</option>
              <option value="Completed">Filter: Completed</option>
              <option value="In Progress">Filter: In Progress</option>
              <option value="Pending">Filter: Pending</option>
            </select>

            <button onClick={handleAddTask} className="add-task-btn">
              Add Task
            </button>
          </div>

          <div className="table-wrapper">
            <table className="task-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}>
                      <p>Loading tasks...</p>
                    </td>
                  </tr>
                ) : filteredTasks.map(task => (
                  <tr key={task._id}>
                    <td className="task-title">{task.title}</td>
                    <td className="task-description">{task.description}</td>
                    <td>
                      <span className={`status-badge status-${task.status.toLowerCase().replace(' ', '-')}`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="task-actions">
                      <button onClick={() => handleEdit(task._id)} className="edit-btn">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(task._id)} className="delete-btn">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredTasks.length === 0 && !loading && (
              <div className="no-tasks">
                <p>No tasks found matching your criteria.</p>
              </div>
            )}

            {error && (
              <div className="error-message-box">
                <p>Error: {error}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
