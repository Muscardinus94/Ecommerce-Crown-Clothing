import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { sectionsData } from "./directoryData";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sectionsData,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
