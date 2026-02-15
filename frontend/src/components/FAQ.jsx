import SpotlightSection from './SpotlightSection';

export default function FAQ() {
  return (
    <SpotlightSection id="faq" className="faq">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">FAQ</p>
          <h2>Questions, answered.</h2>
        </div>
        <div className="faq-grid">
          <div>
            <h3>Can I add unlimited tasks?</h3>
            <p>Yes. Create as many tasks as you need.</p>
          </div>
          <div>
            <h3>Do you support team access?</h3>
            <p>Invite teammates and assign owners to tasks.</p>
          </div>
          <div>
            <h3>Is there a free plan?</h3>
            <p>Start for free with up to 3 active projects.</p>
          </div>
          <div>
            <h3>Can I export my tasks?</h3>
            <p>Yes, export anytime in CSV or PDF.</p>
          </div>
        </div>
      </div>
    </SpotlightSection>
  );
}
