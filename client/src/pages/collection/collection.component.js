import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionPageContainer } from "./collection.styles";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <CollectionPageContainer>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
