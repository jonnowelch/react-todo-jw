import React, { Component } from "react";

class componentName extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Add something to list"
            id="add-to-do"
            type="text"
          ></input>
          <button>Add to List</button>
        </form>
      </div>
    );
  }
}

export default componentName;
