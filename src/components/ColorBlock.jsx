// Vendor Asssets
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  bold: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
  regular: PropTypes.string.isRequired,
};

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 8rem;
`;

const ColorOffsetContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${props => props.size};
`;

const Color = styled.div`
  display: flex;
  flex: ${props => props.size || 1};
  background-color: ${props => props.color}
`;

const ColorBlock = ({ bold, light, regular }) => (
  <div className="card">
    <ColorContainer className="mb-2">
      <Color color={regular} size={3} />

      <ColorOffsetContainer size={1} >
        <Color color={light} />

        <Color color={bold} />
      </ColorOffsetContainer>
    </ColorContainer>

    <div className="text-center">
      {regular}
    </div>
  </div>
);

ColorBlock.propTypes = propTypes;

export default ColorBlock;
