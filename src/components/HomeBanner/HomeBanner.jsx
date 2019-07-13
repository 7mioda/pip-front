import React, { useReducer } from 'react';
import withStyle from './withStyle';
import Input from '../Input/Input';
import Button from '../Button/Button';

const HomeBanner = ({ className }) => {
  const [{ destination }, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      destination: '',
      startDate: null,
      startDateFocused: null,
      endDate: null,
      endDateFocused: null,
    }
  );

  return (
    <div className={`${className}`}>
      <div className="landing">
        <h1>Nous joindre au plus près agence.</h1>
      </div>
      <div className="landing-search">
        <h1>Nous joindre au plus près agence.</h1>
        <form className="landing-search__form">
          <div className="search-input">
            <label htmlFor="search-input">OÙ</label>
            <Input
              type="text"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Partout"
              name="location"
              value={destination}
              id="search-input"
              onChange={({ target: { value } }) =>
                setState({ destination: value })
              }
            />
          </div>
          <div className="half" />
          <div className="half">
            <Button
              animated
              color="white"
              background="#ff5a5f"
              classNames={['landing-search__btn']}
              type="submit"
            >
              Rechercher
            </Button>
          </div>
        </form>
      </div>
        <svg>
            <defs>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path fill="#FBB217" d="M.682,.055c-.225-.001-.337-.09-.682-.04 V1 H1 V.17v-.058v0
                      V.089V.015C.905,.037,.783,.055,.682,.055z"/>
                </clipPath>
            </defs>
        </svg>
    </div>
  );
};
export default withStyle(HomeBanner);
