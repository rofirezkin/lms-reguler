import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({reducer}, applyMiddleware(thunk)); // memerlukan sebuah parameter berupa reducer yaitu kumpulan state global

export default store;
