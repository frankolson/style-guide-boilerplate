// Vendor Asssets
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Project Assets
import Colors from './components/Colors';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
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
              Stuff
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
    );
  }
}

export default App;
