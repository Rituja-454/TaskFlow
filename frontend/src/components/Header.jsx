import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#">
          <span className="logo-mark"></span>
          TaskFlow
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <button className="ghost-btn" type="button">Sign in</button>
          <button className="primary-btn" type="button" onClick={() => navigate('/tasks')}>Start free</button>
        </div>
      </div>
    </header>
  );
}
