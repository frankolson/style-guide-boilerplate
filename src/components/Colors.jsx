// Vendor Asssets
import React from 'react';

// Project Assets
import ColorBlock from './ColorBlock';

const Colors = () => (
  <div className="row">
    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#0069c0"
        light="#6ec6ff"
        regular="#2196f3"
      />
    </div>

    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#000000"
        light="#484848"
        regular="#212121"
      />
    </div>

    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#087f23"
        light="#80e27e"
        regular="#4caf50"
      />
    </div>

    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#d9d9d9"
        light="#f3f3f3"
        regular="#e6e6e6"
      />
    </div>

    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#f2f2f2"
        light="#ffffff"
        regular="#ffffff"
      />
    </div>
  </div>
);

export default Colors;
