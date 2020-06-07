import React from 'react';
import { connect } from 'react-redux';

import HeroBanner from '../../components/banner/home-hero-banner.component';
import Item from '../../components/item/item.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Directory from '../../components/directory/directory.component';
import images from './image.data';
import './homepage.styles.scss';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import ScrollButton from '../../components/scroll-button/scroll-button.component';

const ItemHomePageWithSpinner = WithSpinner(Item);

class HomePage extends React.Component {
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
    const { loading } = this.state;

    return (
      <React.Fragment>
        <HeroBanner />
        <Directory />
        <ScrollButton />
        <ItemHomePageWithSpinner isLoading={loading} />
        <div className='newsletter'>
          <div className='newsletter-container'>
            <div className='newsletter-wrapper'>
              <h2 className='title'>Connect to Basel & Co.</h2>
              <h2 className='subtitle'>Join Our Newsletter</h2>
              <div className='text'>
                <div className='text-wrapper'>
                  <p>
                    Hey you, sign up it only takes a second to be the first to
                    find out about our latest news and promotions…
                  </p>
                </div>
              </div>
              <div className='newsletter-form'>
                <form action=''>
                  <div className='form-fields'>
                    <p>
                      <span className='ti-email'></span>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your email address'
                      />
                    </p>
                    <p>
                      <input type='submit' value='Sign up' />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='client'>
          <div className='client-think'>
            <div className='think-container'>
              <div className='think-warapper'>
                <div className='title-wrapper'>
                  <h4 className='title'>
                    WHAT THEY SAY ABOUT US
                    <span className='title-separator'>
                      <span>x</span>
                    </span>
                  </h4>
                </div>
                <div className='testimonials'>
                  <div className='testimonial'>
                    <div className='testimonial-i'>
                      <div className='testimonial-avatar'>
                        <img
                          src='https://i.ibb.co/xDt17tk/testimonial2-1-100x100.jpg'
                          alt='avatar client'
                        />
                      </div>
                      <div className='testimonial-content'>
                        <div className='tesmonial-comment'>
                          Fringilla iaculis ante torquent a diam a vestibulum
                          diam nisi augue dictumst parturient a vestibulum
                          tortor viverra inceptos adipiscing nec a
                          ullamcorper.Ullamcorper aliquam rutrum.
                        </div>
                        <footer>
                          John Doe
                          <span>Happy Customer</span>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='client-image'>
            <div className='image-wrapper'>
              <div className='instagram-image'>
                <ul className='instagram-widget'>
                  {images.map((image, index) => (
                    <li key={index}>
                      <div className='wrap-pics'>
                        <img src={image} alt='instagram img' />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(HomePage);
