import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../auth/auth';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import { getProducts, deleteProduct } from '../../auth/apiAdmin';
import './manage-product.styles.scss';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
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
                    <th className='orders-table__order-number'>Id</th>
                    <th className='orders-table__order-date'>Name</th>
                    <th className='orders-table__order-status'>Delete</th>
                    <th className='orders-table__order-total'>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td data-title='Order' className='order-table-number'>
                        #{product._id}
                      </td>
                      <td data-title='Product' className='order-table-date'>
                        {product.name}
                      </td>
                      <td data-title='Update' className='order-table-total'>
                        <button className='button-update'>
                          <Link to={`/admin/product/update/${product._id}`}>
                            Update
                          </Link>
                        </button>
                      </td>
                      <td data-title='Delete' className='order-table-view'>
                        <button
                          onClick={() => destroy(product._id)}
                          className='button-delete'
                        >
                          Delete
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

export default ManageProduct;
