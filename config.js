'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/infostartit/cl0l3y9l6000b14n2qnjsfik6',
  accessToken:
    'pk.eyJ1IjoiaW5mb3N0YXJ0aXQiLCJhIjoiY2t6MnFkb3NxMDBmYjJudG00dDlodWl6cSJ9.8ABWFSKEAzbuVzZcwkbxfQ',
  CSV: './Data.csv',
  center: [17.825963778361903, 43.33872113674153],
  zoom: 7,
  title: 'Karta Mostarsko-duvanjske i Trebinjsko-mrkanske biskupije',
  description:
    'Popis i položaj župnih ureda. ',
  sideBarInfo: ['Zupni_ured', 'Naziv', 'Mjesto'],
  popupInfo: ['URL'],
  filters: [
   {
      type: 'checkbox',
      title: 'Odaberite biskupiju: ',
      columnHeader: 'Biskupija', // Case sensitive - must match spreadsheet entry
      listItems: ['Mostarsko-duvanjska biskupija', 'Trebinjsko-mrkanska biskupija'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
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
