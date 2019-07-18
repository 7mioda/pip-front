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
        <h1>Cherchez le plus près boutique.</h1>
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
              rounded
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
            <path
              fill="#FBB217"
              d="M0.313,.055c-.225-.001-.337-.09-.682-.04 V1 H1 V.17v-.058v0
                      V.089V.015C.905,.037,.783,.055,.682,.055z"
            />
          </clipPath>
        </defs>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1424.42 340.08">
          <defs></defs>
          <title>svg</title>
          <g id="Calque_2" data-name="Calque 2">
            <g id="Calque_1-2" data-name="Calque 1">
              <path
                class="cls-1"
                d="M0,313.7v.07a3697.54,3697.54,0,0,1,572.87-.59c106.5,8.16,212.69,20.95,319.42,25.21,177.59,7.1,355.19-9.43,532.13-26.26-.05-26.91-.31-312.13-.17-312.13H0Z"
              />
            </g>
          </g>
        </svg>
      </svg>
      {/*  <svg>*/}
      {/*      <defs>*/}
      {/*          <clipPath id="wave" clipPathUnits="objectBoundingBox">*/}
      {/*              <path fill="#FBB217" d="M0,313.7v.07a3697.54,3697.54,0,0,1,572.87-.59c106.5,8.16,212.69,20.95,319.42,25.21,177.59,7.1,355.19-9.43,532.13-26.26-.05-26.91-.31-312.13-.17-312.13H0Z"/>*/}
      {/*          </clipPath>*/}
      {/*      </defs>*/}
      {/*  </svg>*/}
    </div>
  );
};
export default withStyle(HomeBanner);
