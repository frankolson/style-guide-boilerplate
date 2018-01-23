// Vendor Asssets
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Project Assets
import Section from './components/Section';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Section title="Branding" />
          </div>

          <div className="col-md-6">
            <Section title="Colors" />
          </div>

          <div className="col-md-6">
            <Section title="Typography" />
          </div>

          <div className="col-md-6">
            <Section title="Buttons" />
          </div>

          <div className="col-md-6">
            <Section title="Icons" />
          </div>

          <div className="col-md-6">
            <Section title="Form" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
