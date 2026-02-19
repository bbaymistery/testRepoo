import  { useEffect, useRef } from 'react';

const TrustBoxWidget = () => {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Trustpilot && ref.current) {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="53aa8807dec7e10d38f59f32"
      data-businessunit-id="4cc8156400006400050e0da8"
      data-style-height="120px"
      data-style-width="100%"
    >
      <a
        href="https://uk.trustpilot.com/review/airport-pickups-london.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
};

export default TrustBoxWidget;
