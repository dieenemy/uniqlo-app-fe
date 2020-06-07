import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from './components/spinner/spinner.component';
import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Header from './components/navigation-bar/navigation-bar.component';
import Footer from './components/footer/footer.component';
import QuickView from './components/quick-view/quick-view.component';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './pages/adminDashboard/adminDashboard';
import UserDashboard from './pages/userDashboard/userDashboard';
import CreateProduct from './pages/create product/create-product.component';
import UpdateProduct from './pages/update product/update-product.component';
import Checkout from './pages/checkout/checkout.component';
import UpdateProfile from './pages/update profile/update-profile.component';
import DetailOrder from './pages/detail order/detail-order.component';
import AdminOrder from './pages/order admin/order-admin.component';
import ManageProducts from './pages/manage product/manage-product.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const DetailsPage = lazy(() =>
  import('./pages/product-details/details-page.component')
);
const SignInAndSignUp = lazy(() =>
  import('./pages/sign in and sign up/sign-in-and-sign-up.component')
);
const Cart = lazy(() => import('./pages/cart/cart.component'));
const SearchResults = lazy(() =>
  import('./pages/seach-result-page/search-result.component')
);
const Shop = lazy(() => import('./pages/shop/shop.component'));
const WishList = lazy(() => import('./pages/wishlist/wishlist.component'));
const NotFound = lazy(() =>
  import('./components/not found/not-found.component')
);

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Header />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route
                exact
                path='/signinandsignup'
                component={SignInAndSignUp}
              />
              <Route path='/shop' component={Shop} />
              <Route path='/cart' component={Cart} />
              <Route exact path='/checkout' component={Checkout} />
              <PrivateRoute
                path='/update/profile/:userId'
                component={UpdateProfile}
              />
              <PrivateRoute path='/order/:orderId' component={DetailOrder} />
              <Route path='/wishlist' component={WishList} />
              <Route path='/searchresults' component={SearchResults} />
              <Route path='/quickview' component={QuickView} />
              <Route exact path='/product/:productId' component={DetailsPage} />
              <PrivateRoute
                exact
                path='/user/dashboard'
                component={UserDashboard}
              />
              <AdminRoute
                exact
                path='/admin/dashboard'
                component={AdminDashboard}
              />
              <AdminRoute exact path='/admin/orders' component={AdminOrder} />
              <AdminRoute
                exact
                path='/admin/product/update/:productId'
                component={UpdateProduct}
              />
              <AdminRoute
                exact
                path='/admin/products'
                component={ManageProducts}
              />
              <AdminRoute
                exact
                path='/admin/product/create'
                component={CreateProduct}
              />
            </Suspense>
          </Switch>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
