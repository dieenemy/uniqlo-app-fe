import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { isAuthenticated } from '../../auth/auth';
import { listComment, createComment } from '../../auth/apiCore';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import './comment-item.styles.scss';

const MoreInformation = ({ match, name, product }) => {
  const [visibleDes, setVisibleDes] = useState(true);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(false);
  const [visibleShip, setVisibleShip] = useState(false);
  const [comments, setComments] = useState([]);
  const [values, setValues] = useState({
    rate: 0,
    review: '',
  });

  const handleVisibleDes = () => {
    setVisibleDes(true);
    setVisibleInfo(false);
    setVisibleReviews(false);
    setVisibleShip(false);
  };

  const handleVisibleInfo = () => {
    setVisibleDes(false);
    setVisibleInfo(true);
    setVisibleReviews(false);
    setVisibleShip(false);
  };

  const handleVisibleReviews = () => {
    setVisibleDes(false);
    setVisibleInfo(false);
    setVisibleReviews(true);
    setVisibleShip(false);
  };

  const handleVisibleShip = () => {
    setVisibleDes(false);
    setVisibleInfo(false);
    setVisibleReviews(false);
    setVisibleShip(true);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setValues({ ...values, [name]: e.target.value });
  };

  const onStarClick = (nextValue, prevValue, name) => {
    setValues({ ...values, rate: nextValue });
  };

  const postComment = (e) => {
    e.preventDefault();
    const createCommentData = {
      product: product,
      rate: values.rate,
      review: values.review,
    };

    createComment(userId, token, createCommentData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterComments = comments.filter(
    (comment) => comment.product._id === match.params.productId
  );

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const loadComments = () => {
    listComment(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments(data);
      }
    });
  };

  useEffect(() => {
    loadComments();
  }, [match]);

  return (
    <div className='product-tabs-wrapper'>
      <div className='container'>
        <div className='tabs-aylout-tabs'>
          <ul className='tabs wc-tabs'>
            <li
              className={`description_tab ${visibleDes ? 'active' : ''}`}
              onClick={handleVisibleDes}
            >
              <span>Description</span>
            </li>
            <li
              className={`additional_information-tab ${
                visibleInfo ? 'active' : ''
              }`}
              onClick={handleVisibleInfo}
            >
              <span> Additional information</span>
            </li>
            <li
              className={`reviews_tab ${visibleReviews ? 'active' : ''}`}
              onClick={handleVisibleReviews}
            >
              <span>Reviews</span>
            </li>
            <li
              className={`additional_tab_tab ${visibleShip ? 'active' : ''}`}
              onClick={handleVisibleShip}
            >
              <span>Shipping & Delivery</span>
            </li>
          </ul>
          <div className={`uniqlo-tab-wrapper ${visibleDes ? 'active' : ''}`}>
            <div className='tabs-panel' id='tabs-description'>
              <div className='description-container'>
                <div className='title-wrapper'>
                  <h4 className='title'>
                    <strong>PRODUCT DESCRIPTION</strong>
                  </h4>
                </div>
                <div className='content-element'>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4c4c4c',
                      lineHeight: '1.6',
                    }}
                  >
                    Aenean enim nisl volutpat fusce commodo dui hac in a
                    vestibulum diam convallis dis parturient condimentum massa
                    ac sagittis sed dapibus ullamcorper blandit parturient arcu
                    urna cursus suscipit diam rhoncus. Mus pretium etiam a magna
                    malesuada pharetra tempus nam sapien a adipiscing blandit
                    lorem urna maecenas donec porttitor faucibus malesuada ac
                    consequat. Aliquet sit fusce sociosqu suscipit per a nisl
                    sit conubia pulvinar vitae pretium a convallis id a magnis a
                    amet varius ac mauris quam dictumst a. A dolor aliquet
                    ultricies parturient ac a parturient suspendisse sociosqu
                    sodales in.
                  </p>
                  <p
                    style={{
                      fontSize: '18px',
                      color: '#131313',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                    }}
                  >
                    A adipiscing sociis ultrices sociosqu curabitur neque
                    tristique duis cum vitae ut habitant ornare aptent a diam
                    cursus potenti nibh nec scelerisque. Lectus ridiculus ac
                    quam platea venenatis eleifend ullamcorper ullamcorper id
                    euismod mus fusce volutpat montes.
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#4c4c4c',
                      lineHeight: '1.6',
                    }}
                  >
                    Vitae vestibulum congue nunc parturient venenatis dictumst
                    hac varius ullamcorper nec nascetur ridiculus aptent
                    scelerisque cum at fringilla dis ut phasellus a cum litora
                    est quis a ornare orci.Dis vivamus tincidunt amet porttitor
                    dis hac consectetur elit ut non a dui facilisis elementum
                    dignissim est porta condimentum ullamcorper donec mauris
                    ridiculus a nam purus dictumst suscipit. Nisl nascetur
                    suspendisse a aliquet fusce quisque litora venenatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`uniqlo-tab-wrapper ${visibleReviews ? 'active' : ''}`}
          >
            <div className='tabs-panel' id='tab-reviews'>
              <div id='reviews'>
                <div id='comments'>
                  <h2 className='reviews title'>
                    {filterComments.length} reviews for {name}
                  </h2>
                  <ol className='commentlist'>
                    {filterComments.map((filterComment, index) => (
                      <li key={index} className='review byuser'>
                        <div id='comment-user'>
                          <img
                            src='https://secure.gravatar.com/avatar/d75e4fa2677307ccd12558f69e283178?s=60&d=mm&r=g'
                            alt='user img'
                          />
                          <div className='comment-text'>
                            <div className='star-rating'>
                              <StarRatingComponent
                                name='rate2'
                                starCount={5}
                                value={filterComment.rate}
                                starColor={`#3498db`}
                              />
                            </div>
                            <p className='meta'>
                              <strong className='author'>
                                {filterComment.user.name}
                              </strong>
                              <span className='review-dash'> - </span>
                              <time className='review-published-date'>
                                {moment(filterComment.createdAt).format('LL')}
                              </time>
                            </p>
                            <div className='description'>
                              <p>{filterComment.review}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div id='review_form_wrapper'>
                  <div id='review_form'>
                    <div id='respond' className='comment=respond'>
                      <div id='reply-title' className='comment-reply-title'>
                        Add a review
                      </div>
                      <form action='' className='comment-form'>
                        <p className='comment-notes'>
                          <span id='email-notes'>
                            Your email address will not be published.
                          </span>
                        </p>
                        <div className='comment-form-rating'>
                          <label className='star-rate' htmlFor='rating'>
                            Your rating:
                          </label>
                          <div className='stars'>
                            <StarRatingComponent
                              name='rate'
                              starCount={5}
                              value={values.rate}
                              onStarClick={onStarClick}
                              starColor={`#3498db`}
                            />
                          </div>
                        </div>
                        <p className='comment-form-comment'>
                          <label htmlFor='comment'>Your review</label>
                          <textarea
                            name='review'
                            id='comment'
                            cols='45'
                            rows='8'
                            onChange={handleChange}
                            value={values.review}
                          ></textarea>
                        </p>
                        <button onClick={postComment} className='submit-form'>
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='clear'></div>
              </div>
            </div>
          </div>
          <div className={`uniqlo-tab-wrapper  ${visibleShip ? 'active' : ''}`}>
            <div className='tabs-panel' id='tab-shipping'>
              <img
                src='https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/08/shipping.jpg'
                alt=''
                className='alignleft'
              />
              <p>
                Vestibulum curae torquent diam diam commodo parturient penatibus
                nunc dui adipiscing convallis bulum parturient suspendisse
                parturient a.Parturient in parturient scelerisque nibh lectus
                quam a natoque adipiscing a vestibulum hendrerit et pharetra
                fames.Consequat net
              </p>
              <p>
                Vestibulum parturient suspendisse parturient a.Parturient in
                parturient scelerisque nibh lectus quam a natoque adipiscing a
                vestibulum hendrerit et pharetra fames.Consequat netus.
              </p>
              <p>
                Scelerisque adipiscing bibendum sem vestibulum et in a a a purus
                lectus faucibus lobortis tincidunt purus lectus nisl class
                eros.Condimentum a et ullamcorper dictumst mus et tristique
                elementum nam inceptos hac vestibulum amet elit
              </p>
              <div className='clearfix'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MoreInformation);
