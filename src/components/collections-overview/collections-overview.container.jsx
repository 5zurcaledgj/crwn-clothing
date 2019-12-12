import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../collections-overview/collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
