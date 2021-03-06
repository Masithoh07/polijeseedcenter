module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    screens:{
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1440px',
      '3xl' : '1680px',
    },
    Container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        softLight : '#f7f7f7',
        skinColor : '#e6d8d7',
        mainColor : '#fff3e1',
        chocolate : '#74341c',
        darkSkins : '#c09c83',
        primary: '#0ea5e9',
        secondary: '#0f172a',
        darkSkiesBlue:'#043e59',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      screens:{
        'sm' : '480px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
      }
    },
  },
  plugins: [],
}
