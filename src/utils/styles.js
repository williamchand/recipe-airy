import uFontSFPRO from '../assets/SF-Pro-Rounded.ttf';
import { injectGlobal } from 'emotion/macro'

  injectGlobal`
  body{
    margin: 0;
    font-family: 'SF Pro Rounded';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: 'SF Pro Rounded';
    font-style: normal;
    font-weight: 400;
    src: url(${uFontSFPRO})
  }
`