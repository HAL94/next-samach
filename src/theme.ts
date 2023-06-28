import { extendTheme, theme as base } from '@chakra-ui/react';
export const theme = {
  colors: {
    primary: {
      '50': '#EBE8FC',
      '100': '#C8BFF8',
      '200': '#A595F3',
      '300': '#826CEF',
      '400': '#5F43EA',
      '500': '#3B19E6',
      '600': '#3014B8',
      '700': '#240F8A',
      '800': '#180A5C',
      '900': '#0C052E',
    },
    secondary: {
      '50': '#E6F0FF',
      '100': '#B8D5FF',
      '200': '#8ABBFE',
      '300': '#5DA0FE',
      '400': '#2F85FE',
      '500': '#016BFE',
      '600': '#0155CB',
      '700': '#014098',
      '800': '#012B65',
      '900': '#001533',
    },
    tertiary: {
      '50': '#F3F2F2',
      '100': '#DDDADA',
      '200': '#C7C2C2',
      '300': '#B1AAAA',
      '400': '#9B9292',
      '500': '#857A7A',
      '600': '#6B6161',
      '700': '#504949',
      '800': '#353131',
      '900': '#1B1818',
    },
    ferra: {
      '50': '#F9EBEB',
      '100': '#EEC8C8',
      '200': '#E4A5A5',
      '300': '#D98282',
      '400': '#CE5E5E',
      '500': '#C43B3B',
      '600': '#9D2F2F',
      '700': '#752424',
      '800': '#4E1818',
      '900': '#270C0C',
    },
    green: {
      '50': '#F1F9EB',
      '100': '#D9EFC7',
      '200': '#C0E5A3',
      '300': '#A7DB80',
      '400': '#8ED15C',
      '500': '#76C738',
      '600': '#5E9F2D',
      '700': '#477821',
      '800': '#2F5016',
      '900': '#18280B',
    },
    neptune: {
      '50': '#F0F4F4',
      '100': '#D5E1E1',
      '200': '#BBCECD',
      '300': '#A0BBB9',
      '400': '#85A8A6',
      '500': '#6A9592',
      '600': '#557775',
      '700': '#405958',
      '800': '#2B3B3B',
      '900': '#151E1D',
    },
  }
};
export default extendTheme({
  fonts: {
    heading: `Cairo, ${base.fonts.heading}`,
    body: `Cairo, ${base.fonts.body}`,
  },
  colors: {
    ...theme.colors
  },
  sizes: {
    container: {
      ...base.sizes['container'],
      lg: '1432px',
    },
  },
});
