// Vendor Asssets
import React from 'react';
import styled from 'styled-components';

const TypographyContainer = styled.div`
  font-family: 'Open Sans', sans-serif;

  > h1, h2 {
    font-family: 'Raleway', sans-serif;
  }

  > blockquote {
    color: grey;
    border-left: 5px solid lightGrey;
    font-size: .9rem;
    margin-left: 1rem;
    padding-left: 1rem;
  }
`;

const Typography = () => (
  <div className="card">
    <div className="card-body">
      <TypographyContainer>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>

        <p>
          This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum nulla vitae elementum lobortis. Sed eros neque, volutpat ut risus nec, pellentesque pharetra risus. Fusce dapibus quam nulla, faucibus commodo massa auctor vehicula. Mauris vitae ornare dolor. In eu massa eros. Etiam tempor quis mauris a auctor. Aenean ut dui nec quam venenatis euismod.
        </p>

        <blockquote>
          This is a blockquote. Sed suscipit sed urna eu vestibulum. Pellentesque fermentum lacus sed turpis accumsan luctus. Proin tempor, lacus sit amet.
        </blockquote>

        <small className="text-muted">
          Author tagline
        </small>
      </TypographyContainer>
    </div>
  </div>
);

export default Typography;
