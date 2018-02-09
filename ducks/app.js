import { call, put, select, takeEvery } from 'redux-saga/effects';
import { shuffle, take } from 'lodash';

import {
  createAction,
  createReducer,
  Creator,
  remove,
  change,
  sum,
  flatten
} from './helper';

import quizes from '../quizs.json';


const DEFAULT_QUIZ_AMOUNT = 31;
const DEFAULT_EACH_QUIZ_AMOUNT = 15;

const APP = createAction('APP');

export const SET_ANSWER = APP('SET_ANSWER');
export const SET_QUIZ_INDEX = APP('SET_QUIZ_INDEX');

export const SET_QUIZES = APP('SET_QUIZES');

export const RESET_ANSWER = APP('RESET_ANSWER');

export const setAnswer = Creator(SET_ANSWER);
export const setQuizes = Creator(SET_QUIZES
);
export const resetAnswer = Creator(RESET_ANSWER);

export const setQuizIndex = Creator(SET_QUIZ_INDEX);


export const randomQuizes = () => {
  return take(shuffle(quizes), DEFAULT_QUIZ_AMOUNT);
}

export const checkAnswers = (quizes, answers) => {
  return quizes.map(q => q.solve === answers)
}

export function* appWatcherSaga() {
}

const initial = {
  selectedAnswer: {},
  saveSolve: {},

  currentIndex: 1,
  quizes: [],
}

export default createReducer(initial, state => ({
  [RESET_ANSWER]: bool => ({
    ...state,
    selectedAnswer: {},
  }),
  [SET_ANSWER]: answer => ({
    ...state,
    selectedAnswer: {
      ...state.selectedAnswer,
      ...answer,
    },
  }),
  [SET_QUIZES]: quizes => ({
    ...state,
    quizes,
  }),
  [SET_QUIZ_INDEX]: currentIndex => ({
    ...state,
    currentIndex,
  }),
}))
