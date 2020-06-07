import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../auth/auth';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import {
  listOrders,
  getStatusValues,
  updateOrderStatus,
} from '../../auth/apiAdmin';

const OderAdmin = ({ history }) => {
  const [orders, setOrders] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  const { user, token } = isAuthenticated();

  const loadOrders = () => {
    listOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  const loadStatusValues = () => {
    getStatusValues(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatusValues(data);
      }
    });
  };

  useEffect(() => {
    loadOrders();
    loadStatusValues();
  }, []);

  const handleStatusChange = (e, orderId) => {
    updateOrderStatus(user._id, token, orderId, e.target.value).then((data) => {
      if (data.error) {
        console.log('Status update failed');
      } else {
        loadOrders();
      }
    });
  };

  const showStatus = (order) => (
    <select
      className='form-control'
      onChange={(e) => handleStatusChange(e, order._id)}
    >
      <option>Update Status</option>
      {statusValues.map((status, index) => (
        <option key={index} value={status}>
          {status}
        </option>
      ))}
    </select>
  );

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
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td data-title='Order' className='order-table-number'>
                        #{order._id}
                      </td>
                      <td data-title='Date' className='order-table-date'>
                        {moment(order.createdAt).format('LL')}
                      </td>
                      <td data-title='Status' className='order-table-status'>
                        {showStatus(order)}
                      </td>
                      <td data-title='Total' className='order-table-total'>
                        <span className='price-amount'>
                          <span className='price-currency'>{order.amount}</span>
                        </span>{' '}
                        for {order.products.length}{' '}
                        {order.products.length > 1 ? 'items' : 'item'}
                      </td>
                      <td data-title='Actions' className='order-table-view'>
                        <button
                          onClick={() => history.push(`/order/${order._id}`)}
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

export default withRouter(OderAdmin);
