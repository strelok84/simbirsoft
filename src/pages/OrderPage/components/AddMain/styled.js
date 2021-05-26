import styled from "styled-components/macro";
import constants from "../../../../styles/constants";
import checkMark from "../../../../assets/img/check_mark.svg";

export const FormMain = styled.div`
  grid-column: 1/87;
  grid-row: 17/101;
  display: grid;
  grid-template-columns: repeat(43, 1fr);
  z-index: 10;
  &.basket {
    grid-column: 1/87;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    grid-column: 15/87;
  }
`;

export const FormMainWrapper = styled.div`
  grid-column: 1/44;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (min-width: ${constants.screen_tablet}) and (max-width: ${constants.screen_dx_min +
    1}px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;
export const FormMainLent = styled.div`
  width: 1248px;
  height: 100%;
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export const FormMainAside = styled.div`
  grid-column: 32/44;
  height: 100%;
  border-left: 1px solid ${constants.light_gray};
  display: flex;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    border: 0;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-column: 3/31;
    margin-left: 10%;
    margin-top: 0;
    border: 0;
    height: auto;
  }
`;
export const FormMainLane = styled.div`
  height: 100%;
  display: flex;
  margin-left: 32px;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 32px;
    align-items: flex-start;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-left: 0;
    align-items: flex-start;
    min-width: 320px;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-right: 5%;
    margin-left: 0;
    align-items: center;
  }
`;
export const FormMainOrder = styled.div`
  width: 100%;
  font: 500 normal 18px/21px "Roboto", sans-serif;
  margin-top: 32px;
  text-align: right;
  &.basket {
    display: block;
    text-align: left;
    width: 90%;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    text-align: center;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    text-align: left;
    padding-left: 0;
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    padding-top: 0;
    text-align: center;
    display: none;
    padding-left: 10%;
  }
`;

export const FormMainPoint = styled.div`
  width: 100%;
  padding-left: 32px;
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  &.basket {
    display: flex;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-top: 8px;

    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    &.basket {
      padding-top: 8px;
    }
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    padding-left: 0;
  }
`;
export const FormMainPickup = styled.div`
  font: 300 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
`;
export const FormMainDots = styled.div`
  flex-grow: 1;
  border-bottom: 2px dotted ${constants.dark_gray};
`;
export const FormMainAddress = styled.div`
  font: 300 normal 14px/16px "Roboto", sans-serif;
  color: ${constants.dark_gray};
  text-align: right;
`;
export const FormMainItemAside = styled.div`
  width: 100%;
  padding-left: 32px;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  &.basket {
    display: flex;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    padding-top: 8px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    padding-left: 0;
  }
`;

export const FormMainCost = styled.div`
  width: 100%;

  font: 400 normal 16px/16px "Roboto", sans-serif;
  color: ${constants.main_black};
  margin-top: 32px;
  &.basket {
    display: block;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
      1}px) {
      margin-left: 0;
      padding-left: 0;
    }
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    margin-top: 16px;
    display: none;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    display: none;
    padding-left: 10%;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    min-width: 270px;
  }
`;

export const FormMainBtn = styled.a`
  text-decoration: none;
  width: 100%;
  padding-left: 32px;
  font: 500 normal 18px "Roboto", sans-serif;
  color: #fff;
  line-height: 21px;
  background-color: ${constants.light_gray};
  background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
  padding: 0;
  margin-top: 32px;
  min-width: 280px;
  max-width: 320px;
  height: 48px;
  border: 0;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    position: fixed;
    bottom: 22px;
    left: 20%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    min-width: 160px;
    z-index: 0;
    width: 60vw;
    position: fixed;
    bottom: 1em;
    left: 10%;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 80%;
    min-width: auto;
  }
`;

export const FormMainModel = styled.div`
  grid-column: 3/31;
  max-width: 928px;
  height: 100%;
  display: flex;
  flex-direction: column;
  &.disable {
    display: none;
  }
  font: 300 normal 14px/16px "Roboto", sans-serif;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    width: 100%;
    align-items: left;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width: 100%;
    justify-content: flex-start;

    grid-column: 1/44;
  }
`;
export const Color = styled.div`
  margin-top: 32px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 15%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    align-self: flex-start;
    margin-top: 8px;
  }
`;

export const ModelRadioWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  &.disable {
    display: none;
  }
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    align-self: flex-start;
    margin-left: 15%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    flex-direction: column;
    align-self: flex-start;
  }
`;
export const AllModel = styled.input`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-right: 1em;
    margin-top: 1em;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color: ${constants.dark_gray};
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 1em;
    }
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label {
    color: ${constants.main_black};
  }
`;

export const Econom = styled.input`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-right: 1em;
    margin-top: 1em;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color: ${constants.dark_gray};
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 1em;
    }
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label {
    color: ${constants.main_black};
  }
`;
export const Premium = styled.input`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-top: 1em;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color: ${constants.dark_gray};
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 1em;
    }
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label {
    color: ${constants.main_black};
  }
`;

export const Basket = styled.img`
  @media (min-width: ${constants.screen_dx_min - 1}px) {
    display: none;
  }
  height: 48px;
  position: fixed;
  bottom: 22px;
  right: 5%;
  z-index: 10000;

  &.basket {
    filter: brightness(0.5) sepia(1) saturate(2000%) hue-rotate(120deg);
  }
`;
export const FormDateWrapper = styled.div`
  margin-top: 32px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 15%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-top: 1em;
  }
`;

export const DateWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-top: 8px;
  }
  label {
    text-align: right;
    margin-right: 3px;
  }
  input {
    border: none;
    border-bottom: 1px solid ${constants.dark_gray};
    width: 224px;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color: ${constants.main_black};
    ::placeholder {
      color: ${constants.dark_gray};
      font: 300 normal 14px/16px "Roboto", sans-serif;
    }
  }
  button:after {
    background-color: transparent;
    color: ${constants.main_black};
    font-size: 21px;
    line-height: 16px;
    display: inline;
    vertical-align: baseline;
  }
`;
export const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 15%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-top: 1em;
  }
  span {
    margin-top: 32px;
    margin-bottom: 8px;
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export const RadioInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  opacity: 0;
  + label {
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
    user-select: none;
    font: 300 normal 14px/16px "Roboto", sans-serif;
    color: ${constants.dark_gray};
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-top: 1em;
    }
  }
  + label::before {
    content: "";
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: top top;
    background-size: 50% 50%;
  }

  :checked + label::before {
    box-sizing: border-box;
    border: 2px solid ${constants.main_accent};
    width: 0.7em;
    height: 0.7em;
  }
  :checked + label {
    color: ${constants.main_black};
  }
`;

export const AdditionalService = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    margin-left: 15%;
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
    margin-top: 8px;
    margin-bottom: 0;
  }
  span {
    margin-bottom: 8px;
    @media (max-width: ${constants.screen_tablet - 1}px) {
      margin-bottom: 0;
    }
  }
`;

export const CheckBox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 0;
  + label {
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
  }
  + label::before {
    box-sizing: border-box;
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid ${constants.dark_gray};
    margin-right: 0.5em;
  }
  :checked + label::before {
    content: url(${checkMark});
    border: 2px solid ${constants.main_accent};
  }
`;
