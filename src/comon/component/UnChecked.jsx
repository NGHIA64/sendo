import React, { Component } from "react";

class UnChecked extends Component {
  props = {
    diaDiem: ''
  }
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          xlink="http://www.w3.org/1999/xlink"
          class="d7ed-SwZDZ2 d7ed-ong_OF"
        >
          <path
            d="M18.545 4C19.35 4 20 4.796 20 5.778v12.444c0 .982-.651 1.778-1.455 1.778H5.455C4.65 20 4 19.204 4 18.222V5.778C4 4.796 4.651 4 5.455 4h13.09zM18 6H6v12h12V6z"
            fill="#6F787E"
            fill-rule="nonzero"
          ></path>
        </svg>
      </>
    );
  }
}

export default UnChecked;
