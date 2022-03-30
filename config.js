'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/infostartit/cl0l3y9l6000b14n2qnjsfik6',
  accessToken:
    'pk.eyJ1IjoiaW5mb3N0YXJ0aXQiLCJhIjoiY2t6MnFkb3NxMDBmYjJudG00dDlodWl6cSJ9.8ABWFSKEAzbuVzZcwkbxfQ',
  CSV: './Data.csv',
  center: [17.825963778361903, 43.33872113674153],
  zoom: 7,
  title: 'Dekanati i župni uredi',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor ante, consectetur a libero sed, fringilla aliquam dui. Pellentesque euismod arcu dictum mauris eleifend dictum. Proin sed lorem sodales, vehicula orci in, laoreet sem. Duis gravida ligula leo, non scelerisque urna sagittis in. Quisque eleifend dui non facilisis consectetur. Duis bibendum mollis venenatis. Nulla et consequat lectus. In interdum iaculis suscipit. Donec sagittis massa mattis, ornare elit in, commodo ipsum. Ut nec convallis leo. In maximus, enim a congue interdum, orci felis congue velit, a mollis nisi nulla eu tellus. Cras vitae augue tortor.',
  sideBarInfo: ['Zupni_ured', 'Naziv', 'Mjesto'],
  popupInfo: ['URL'],
  filters: [
    {
      type: 'dropdown',
      title: 'Odaberite biskupiju: ',
      columnHeader: 'Biskupija',
      listItems: [
        'Mostarsko-duvanjska biskupija',
        'Trebinjsko-mrkanska biskupija',
      ],
    },
   {
      type: 'dropdown',
      title: 'Odaberite dekanat: ',
      columnHeader: 'Dekanat',
      listItems: [
        'Broćanski dekanat',
        'Čapljinski dekanat',
        'Duvanjski dekanat',
        'Grudski dekanat',
        'Ljubuški dekanat',
        'Mostarski dekanat',
        'Posuški dekanat',
        'Širokobriješki dekanat',
        'Stolački dekanat',
        'Trebinjski dekanat',
      ],
    },
  ],
};
