import { notoSans } from '@configs/bigContents';
import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const theme: DefaultTheme = {
  primaryVariant: '#0654e2',
  primary: '#226bef',
  primary900: '#3779f0',
  primary800: '#4e88f2',
  primary700: '#6397f4',
  primary600: '#7aa6f5',
  primary500: '#90b4f7',
  primary400: '#a6c4f9',
  primary300: '#bcd2fa',
  primary200: '#d2e1fc',
  primary100: '#e8f0fe',
  secondaryVariant: '#9e96ff',
  secondary: '#b296ff',
  secondary900: '#b9a0ff',
  secondary800: '#c1abff',
  secondary600: '#d1c0ff',
  secondary500: '#d8caff',
  secondary700: '#c9b5ff',
  secondary400: '#e0d5ff',
  secondary200: '#f0eaff',
  secondary300: '#e8dfff',
  secondary100: '#f7f4ff',
  background: '#f9fafc',
  borderRadiusBase: '2px',
  baseFontColor: '#000',
  primaryButtonTextColor: '#fff',

  black: '#000',
  gray9: '#3b3f4a',
  gray8: '#5a5e6a',
  gray7: '#7f828c',
  gray6: '#9da0a8',
  gray5: '#bec1c7',
  gray4: '#d5d8dc',
  gray3: '#e4e6ea',
  gray2: '#eff1f4',
  gray1: '#f9fafc',
  white: '#fff',
  caution: '#f9a825',
  error: '#e03028',
  success: '#2fb916',
};

export const GlobalFontStyle = createGlobalStyle`
  * {
    font-family: ${notoSans.style.fontFamily};
  }
`;
