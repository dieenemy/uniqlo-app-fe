import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../../auth/auth';
import { createProduct, getCategories } from '../../auth/apiAdmin';
import SideBar from '../../components/side-bar/side-bar';
import Banner from '../../components/banner/other-hero-banner.component';
import './create-product.styles.scss';

const CreateProduct = () => {
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
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    categories,
    quantity,
    error,
    createdProduct,
    formData,
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    createProduct(user._id, token, formData).then((data) => {
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
          createdProduct: data.name,
        });
      }
    });
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
      <h2>{`${createdProduct}`} is created!</h2>
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

export default CreateProduct;
