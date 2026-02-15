import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const heroCardRef = useRef(null);
  const heroCopyRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heroCard = heroCardRef.current;
    const heroCopy = heroCopyRef.current;

    if (!hero) return;

    const setSpotlight = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--spot-x", `${x}%`);
      hero.style.setProperty("--spot-y", `${y}%`);
    };

    const handleMouseMove = (event) => {
      if (heroCard && heroCard.contains(event.target)) {
        hero.classList.remove("spotlight-active");
        if (heroCopy) {
          heroCopy.classList.remove("copy-spotlight-active");
        }
        return;
      }

      hero.classList.add("spotlight-active");
      setSpotlight(event);

      if (heroCopy && heroCopy.contains(event.target)) {
        heroCopy.classList.add("copy-spotlight-active");
      } else if (heroCopy) {
        heroCopy.classList.remove("copy-spotlight-active");
      }
    };

    const handleMouseLeave = () => {
      hero.classList.remove("spotlight-active");
      if (heroCopy) {
        heroCopy.classList.remove("copy-spotlight-active");
      }
    };

    const handleCopyEnter = () => {
      hero.classList.add("spotlight-orange");
    };

    const handleCopyLeave = () => {
      hero.classList.remove("spotlight-orange");
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    if (heroCopy) {
      heroCopy.addEventListener("mouseenter", handleCopyEnter);
      heroCopy.addEventListener("mouseleave", handleCopyLeave);
    }

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      if (heroCopy) {
        heroCopy.removeEventListener("mouseenter", handleCopyEnter);
        heroCopy.removeEventListener("mouseleave", handleCopyLeave);
      }
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero-grid">
        <div className="hero-copy" ref={heroCopyRef}>
          <p className="eyebrow">Task management</p>
          <h1>Streamline your tasks efficiently.</h1>
          <p className="lead">
            TaskFlow helps teams plan, track, and complete work with clean
            lists, smart filters, and real-time progress updates.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" type="button" onClick={() => navigate('/tasks')}>Get started</button>
            <button className="outline-btn" type="button" onClick={() => navigate('/tasks')}>View tasks</button>
          </div>
          <div className="hero-meta">
            <div>
              <p className="meta-title">5 min setup</p>
              <p className="meta-text">Organize in minutes</p>
            </div>
            <div>
              <p className="meta-title">12,400+</p>
              <p className="meta-text">tasks completed</p>
            </div>
            <div>
              <p className="meta-title">98%</p>
              <p className="meta-text">on-time delivery</p>
            </div>
          </div>
        </div>
        <div className="hero-card" ref={heroCardRef}>
          <div className="card-top">
            <p className="card-label">Main task table</p>
            <div className="pulse"></div>
          </div>
          <h2>Weekly priorities</h2>
          <p>Track status, owners, and due dates at a glance.</p>
          <div className="card-badges">
            <span>Completed</span>
            <span>In progress</span>
            <span>Pending</span>
          </div>
          <button className="primary-btn block" type="button" onClick={() => navigate('/tasks/add')}>Add new task</button>
          <div className="card-footer">
            <div>
              <p className="meta-title">24</p>
              <p className="meta-text">active tasks</p>
            </div>
            <div>
              <p className="meta-title">7 days</p>
              <p className="meta-text">next deadline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
