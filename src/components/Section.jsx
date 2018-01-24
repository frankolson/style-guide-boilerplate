// Vendor Asssets
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
};

const Section = ({ children, position, title }) => (
  <div>
    <h5>
      <span className="text-muted">{`${position}. `}</span>

      {`${title}`}
    </h5>

    {children}
  </div>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
