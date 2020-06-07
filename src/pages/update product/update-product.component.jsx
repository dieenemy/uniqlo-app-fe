import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { isAuthenticated } from '../../auth/auth';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import { getProduct, getCategories, updateProduct } from '../../auth/apiAdmin';

const UpdateProduct = ({ match }) => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: false,
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    // categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  const init = (productId) => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // populate the state
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category._id,
          shipping: data.shipping,
          quantity: data.quantity,
          formData: new FormData(),
        });
        // load categories
        initCategories();
      }
    });
  };

  // load categories and set form data
  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init(match.params.productId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    updateProduct(match.params.productId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: '',
            description: '',
            photo: '',
            price: '',
            quantity: '',
            loading: false,
            error: false,
            redirectToProfile: true,
            createdProduct: data.name,
          });
        }
      }
    );
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      <h2>{error}</h2>
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdProduct ? '' : 'none' }}
    >
      <h2>{`${createdProduct}`} is updated!</h2>
    </div>
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
            {showError()}
            {showSuccess()}
            <form className='create-category' onSubmit={handleSubmit}>
              <label htmlFor='image'>
                Image&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('photo')}
                type='file'
                name='photo'
                accept='image/*'
              />
              <label htmlFor='name'>
                Name&nbsp;<span className='required'>*</span>
              </label>
              <input onChange={handleChange('name')} type='text' value={name} />
              <label htmlFor='description'>
                Description&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('description')}
                value={description}
              />
              <label htmlFor='price'>
                Price&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('price')}
                type='number'
                value={price}
              />
              <label htmlFor='category'>
                Category&nbsp;<span className='required'>*</span>
              </label>
              <select onChange={handleChange('category')}>
                <option>Please select</option>
                {categories &&
                  categories.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              <label htmlFor='shipping'>
                Shipping&nbsp;<span className='required'>*</span>
              </label>
              <select onChange={handleChange('shipping')}>
                <option>Please select</option>
                <option value='0'>No</option>
                <option value='1'>Yes</option>
              </select>
              <label htmlFor='quantity'>
                Quantity&nbsp;<span className='required'>*</span>
              </label>
              <input
                onChange={handleChange('quantity')}
                type='number'
                value={quantity}
              />
              <button type='submit' className='form-login__submit'>
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UpdateProduct);
