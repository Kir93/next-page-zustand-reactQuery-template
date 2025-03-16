import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const theme = defineConfig({
  globalCss: {
    'html, body': {
      backgroundColor: '#f9fafc',
      margin: 0,
      padding: 0,
      font: 'inherit',
      color: 'inherit',
      boxSizing: 'border-box'
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: '--font-noto-sans' },
        body: { value: '--font-noto-sans' }
      },
      colors: {
        primary: {
          900: { value: '#1a5de4' },
          800: { value: '#3779f0' },
          700: { value: '#4e88f2' },
          600: { value: '#6397f4' },
          500: { value: '#7aa6f5' },
          400: { value: '#90b4f7' },
          300: { value: '#a6c4f9' },
          200: { value: '#bcd2fa' },
          100: { value: '#d2e1fc' },
          50: { value: '#e8f0fe' }
        },
        secondary: {
          900: { value: '#b296ff' },
          800: { value: '#b9a0ff' },
          700: { value: '#c1abff' },
          600: { value: '#d1c0ff' },
          500: { value: '#d8caff' },
          400: { value: '#c9b5ff' },
          300: { value: '#e0d5ff' },
          200: { value: '#f0eaff' },
          100: { value: '#e8dfff' },
          50: { value: '#f7f4ff' }
        },
        warning: { value: '#e03028' },
        success: { value: '#2fb916' },
        black: { value: '#000' },
        white: { value: '#fff' },
        gray: {
          900: { value: '#3b3f4a' },
          800: { value: '#5a5e6a' },
          700: { value: '#7f828c' },
          600: { value: '#9da0a8' },
          500: { value: '#bec1c7' },
          400: { value: '#d5d8dc' },
          300: { value: '#e4e6ea' },
          200: { value: '#eff1f4' },
          100: { value: '#f9fafc' }
        }
      }
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: '{colors.primary.900}' },
          outline: { value: '{colors.primary.900}' }
        },
        secondary: {
          solid: { value: '{colors.secondary.900}' },
          outline: { value: '{colors.secondary.900}' }
        },
        warning: { solid: { value: '{colors.warning}' }, outline: { value: '{colors.warning}' } },
        success: { solid: { value: '{colors.success}' }, outline: { value: '{colors.success}' } }
      }
    }
  }
});

export default createSystem(defaultConfig, theme);
