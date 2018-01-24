// Vendor Asssets
import React from 'react';

const Section = ({ children, position, title }) => (
  <div>
    <h5>
      <span className="text-muted">{`${position}. `}</span>

      {`${title}`}
    </h5>

    {children}
  </div>
);

export default Section;
