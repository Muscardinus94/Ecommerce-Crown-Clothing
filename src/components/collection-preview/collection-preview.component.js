import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewItemsContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle
      onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </CollectionPreviewTitle>
    <CollectionPreviewItemsContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewItemsContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
