// Vendor Asssets
import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Project Assets
import Colors from './components/Colors';
import Section from './components/Section';
import Typography from './components/Typography';

const Header = styled.div`
  background-color: #24292e;
  color: white;
  width: 100vw;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header className="mb-5">
          <div className="text-center pt-2 pb-2">
            <h3>Style Guide Boilerplate</h3>
          </div>
        </Header>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <Section position="1" title="Branding">
                Stuff
              </Section>
            </div>

            <div className="col-md-6 mb-3">
              <Section position="2" title="Colors">
                <Colors />
              </Section>
            </div>

            <div className="col-md-6 mb-3">
              <Section position="3" title="Typography">
                <Typography />
              </Section>
            </div>

            <div className="col-md-6 mb-3">
              <Section position="4" title="Buttons">
                Stuff
              </Section>
            </div>

            <div className="col-md-6 mb-3">
              <Section position="5" title="Icons">
                Stuff
              </Section>
            </div>

            <div className="col-md-6 mb-3">
              <Section position="6" title="Forms">
                Stuff
              </Section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
