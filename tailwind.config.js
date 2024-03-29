/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            'white': '#ffffff',
            'primary': {
              900: '#0A196F',
              800: '#102587',
              700: '#1A37A7',
              600: '#264BC8',
              500: '#3563E9',
              400: '#658DF1',
              300: '#85A8F8',
              200: '#AEC8FC',
              100: '#D6E4FD',
            },
            'succes': {
              900: '#3B6506',
              800: '#4C7A0B',
              700: '#659711',
              600: '#7FB519',
              500: '#9CD323',
              400: '#BCE455',
              300: '#D3F178',
              200: '#E8FAA6',
              100: '#F5FCD2',
            },
            'error': {
              900: '#7A0619',
              800: '#930B16',
              700: '#B71112',
              600: '#DB2719',
              500: '#FF4423',
              400: '#FF7F59',
              300: '#FFA37A',
              200: '#FFC8A6',
              100: '#FFE7D3',
            },
            'warning': {
              900: '#7A4D0B',
              800: '#936312',
              700: '#B7821D',
              600: '#DBA32A',
              500: '#FFC73A',
              400: '#FFD96B',
              300: '#FFE488',
              200: '#FFEFB0',
              100: '#FFF8D7',
            },
            'secondary': {
              900: '#040815',
              800: '#080C19',
              700: '#0D121F',
              600: '#131825',
              500: '#1A202C',
              400: '#596780',
              300: '#90A3BF',
              200: '#C3D4E9',
              100: '#E0E9F4',
            },
          },
      extend: {
        fontFamily: {
          jakarta: ["Plus Jakarta Sans", "sans-serif", "Arial"],
        },
      },
    },
    plugins: [],
  };
  