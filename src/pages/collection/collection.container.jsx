import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import CollectionsPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
