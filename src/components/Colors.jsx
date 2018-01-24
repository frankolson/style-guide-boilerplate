// Vendor Asssets
import React from 'react';

// Project Assets
import ColorBlock from './ColorBlock';

const Colors = () => (
  <div className="row">
    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#497fe0"
        light="#759de8"
        regular="#5f8ee4"
      />
    </div>

    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#0d0d0d"
        light="#262627"
        regular="#19191a"
      />
    </div>

    <div className="col-6 col-sm-4 mb-3">
      <ColorBlock
        bold="#e05049"
        light="#e87a75"
        regular="#e4655f"
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
