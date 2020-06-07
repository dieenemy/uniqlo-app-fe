import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import { singleOrder } from '../../auth/apiCore';

import './detail-order.styles.scss';

const DetailOrder = ({ match }) => {
  const [order, setOrder] = useState({});
  const {
    firstName,
    lastName,
    address,
    city,
    phone,
    email,
    amount,
    products,
  } = order;

  const loadSingleOrder = (orderId) => {
    singleOrder(orderId).then((data) => {
      if (data.error) {
      } else {
        setOrder(data);
      }
    });
  };

  console.log(order.products);

  useEffect(() => {
    const orderId = match.params.orderId;
    loadSingleOrder(orderId);
  }, []);

  return (
    <React.Fragment>
      <Banner>
        <h2>MY ACCOUNT</h2>
      </Banner>
      <div className='site-content'>
        <div id='type-page'>
          <SideBar />
          <div className='account-content'>
            <p>
              Order #<mark className='order-number'>{order._id}&nbsp;</mark> was
              placed on
              <mark className='order-date'>
                &nbsp;{moment(order.createdAt).format('LL')}
              </mark>{' '}
              and is currently
              <mark className='order-status'>&nbsp;{order.status}</mark>
            </p>
            <section className='order-details'>
              <h2 className='order-details-title'>Order details</h2>
              <div className='responsive-table'>
                <table className='table--order-details'>
                  <thead>
                    <tr>
                      <th className='product-name'>Product</th>
                      <th className='product-total'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products ? (
                      products.map((product, index) => (
                        <tr key={index} className='order-item'>
                          <td className='product-name'>
                            <span>{product.name}</span>
                            <strong>x&nbsp;{product.count}</strong>
                          </td>
                          <td className='product-total'>
                            <span className='price-amount'>
                              <span className='price-currency'>
                                £{product.count * product.price}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>Loading...</td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Subtotal</th>
                      <td>
                        <span className='price-amount'>
                          <span className='price-currency'>£{amount}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        <span className='price-amount'>
                          <span className='price-currency'>£{amount}</span>
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>
            <section className='customer-details'>
              <section className='two-columns'>
                <div className='billing-address'>
                  <h2 className='column__title'>Billing address</h2>
                  <address>
                    {firstName}
                    {lastName}
                    <br />
                    {address}
                    <br />
                    {city}
                    <br />
                    {phone}
                    <br />
                    {email}
                  </address>
                </div>
                <div className='shipping-address'>
                  <h2 className='column__title'>Shipping address</h2>
                  <address>
                    {firstName} {lastName}
                    <br />
                    {address}
                    <br />
                    {city}
                  </address>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(DetailOrder);
