import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Banner from '../../components/banner/other-hero-banner.component';
import CollectionPage from '../../components/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ScrollButton from '../../components/scroll-button/scroll-button.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <React.Fragment>
        <Banner>
          <h2>Shop</h2>
        </Banner>
        <ScrollButton />

        <div className='shop-page'>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionOverviewWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
