import SpotlightSection from './SpotlightSection';

export default function Features() {
  return (
    <SpotlightSection id="features" className="features">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">Built for focus</p>
          <h2>Everything you need to manage tasks with clarity.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Main task table</h3>
            <p>Sort by status, priority, and due date in one view.</p>
          </article>
          <article className="feature-card">
            <h3>Quick actions</h3>
            <p>Edit, complete, or delete tasks without leaving the list.</p>
          </article>
          <article className="feature-card">
            <h3>Smart filters</h3>
            <p>Filter tasks by status to stay on top of priorities.</p>
          </article>
        </div>
      </div>
    </SpotlightSection>
  );
}
