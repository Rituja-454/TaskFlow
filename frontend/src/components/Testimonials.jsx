import SpotlightSection from './SpotlightSection';

export default function Testimonials() {
  return (
    <SpotlightSection id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">Team reviews</p>
          <h2>Teams love the clarity it brings.</h2>
        </div>
        <div className="testimonial-grid">
          <article>
            <p className="quote">
              "Our weekly planning now fits on one screen and no task gets lost."
            </p>
            <p className="author">Maya Chen, TaskHub</p>
          </article>
          <article>
            <p className="quote">
              "The filters and quick edits keep the whole team aligned."
            </p>
            <p className="author">Eli Ross, Flowdesk</p>
          </article>
          <article>
            <p className="quote">
              "We cut status meetings in half because everyone is already up to date."
            </p>
            <p className="author">Samira Ali, Planify</p>
          </article>
        </div>
      </div>
    </SpotlightSection>
  );
}
