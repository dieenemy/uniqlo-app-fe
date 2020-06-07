import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../auth/auth';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import { getPurchaseHistory } from '../../auth/apiUser';

import './user-dashboard.styles.scss';

const UserDashboard = ({ history }) => {
  const [histories, setHistory] = useState([]);

  const {
    user: { _id },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
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
            <div className='responsive-table'>
              <table className='orders-table'>
                <thead>
                  <tr>
                    <th className='orders-table__order-number'>Order</th>
                    <th className='orders-table__order-date'>Date</th>
                    <th className='orders-table__order-status'>Status</th>
                    <th className='orders-table__order-total'>Total</th>
                    <th className='orders-table__order-view'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {histories.map((item, index) => (
                    <tr key={index}>
                      <td data-title='Order' className='order-table-number'>
                        #{item._id}
                      </td>
                      <td data-title='Date' className='order-table-date'>
                        {moment(item.createdAt).format('LL')}
                      </td>
                      <td data-title='status' className='order-table-status'>
                        {item.status}
                      </td>
                      <td data-title='total' className='order-table-total'>
                        <span className='price-amount'>
                          <span className='price-currency'>{item.amount}</span>
                        </span>{' '}
                        for {item.products.length}{' '}
                        {item.products.length > 1 ? 'items' : 'item'}
                      </td>
                      <td data-title='actions' className='order-table-view'>
                        <button
                          onClick={() => history.push(`/order/${item._id}`)}
                          className='button-view'
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserDashboard);
