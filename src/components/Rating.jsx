import React from 'react';
import './rating.css';
import Star from '../assets/icon-star.svg';

const Rating = () => {
  return (
    <>
      <div className="pop-up">
        <img src={Star} className="pop-up__star-image" alt="star" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form action="/" className="pop-up__rating-form">
          <div className="pop-up__ratings-list">
            <input
              className="pop-up__ratings"
              type="radio"
              id="1"
              name="rating"
              value="1"
            />
            <label htmlFor="1">1</label>
            <input
              className="pop-up__ratings"
              type="radio"
              id="2"
              name="rating"
              value="2"
            />
            <label htmlFor="2">2</label>
            <input
              className="pop-up__ratings"
              type="radio"
              id="3"
              name="rating"
              value="3"
            />
            <label htmlFor="3">3</label>
            <input
              className="pop-up__ratings"
              type="radio"
              id="4"
              name="rating"
              value="4"
            />
            <label htmlFor="4">4</label>
            <input
              className="pop-up__ratings"
              type="radio"
              id="5"
              name="rating"
              value="5"
            />
            <label htmlFor="5">5</label>
          </div>
          <div className="pop-up__button-container">
            <button className="pop-up__submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Rating;
