import {css} from 'emotion/macro';

export const uCard = css`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #c8ced3;
  border-radius: 4px;
  height: 255px;
  width: 255px;
  margin: 20px auto 20px 0px;
  @media (max-width: 600px) {
    width: 224px;
  }
  @media (max-width: 450px) {
    width: 160px;
  }
`;

export const uCardImgTop = css`
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const uCardBody = css`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 20px;
`;

export const uCardTitle = css`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const uCardCreator = css`
  font-size: 16px;
  margin-bottom: 12px;
`;

export const uCardText = css`
  font-size: 14px;
`;

export const uCardRating = css`
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
`;


export const uRecipe = css`
`;