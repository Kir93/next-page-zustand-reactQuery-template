import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-noto-sans)',
    body: 'var(--font-noto-sans)'
  },
  colors: {
    primary: {
      900: '#226bef',
      800: '#3779f0',
      700: '#4e88f2',
      600: '#6397f4',
      500: '#7aa6f5',
      400: '#90b4f7',
      300: '#a6c4f9',
      200: '#bcd2fa',
      100: '#d2e1fc',
      50: '#e8f0fe'
    },
    secondary: {
      900: '#b296ff',
      800: '#b9a0ff',
      700: '#c1abff',
      600: '#d1c0ff',
      500: '#d8caff',
      400: '#c9b5ff',
      300: '#e0d5ff',
      200: '#f0eaff',
      100: '#e8dfff',
      50: '#f7f4ff'
    },
    warning: '#e03028',
    success: '#2fb916',
    black: '#000',
    white: '#fff',
    gray: {
      900: '#3b3f4a',
      800: '#5a5e6a',
      700: '#7f828c',
      600: '#9da0a8',
      500: '#bec1c7',
      400: '#d5d8dc',
      300: '#e4e6ea',
      200: '#eff1f4',
      100: '#f9fafc'
    }
  },
  backgroundColor: '#f9fafc'
});
