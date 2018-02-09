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

export const GO_BACK_QUIZ = APP('GO_BACK_QUIZ');
export const GO_NEXT_QUIZ = APP('GO_NEXT_QUIZ');

export const SET_QUIZES = APP('SET_QUIZES');

export const RESET_ANSWER = APP('RESET_ANSWER');

export const setAnswer = Creator(SET_ANSWER);
export const setQuizes = Creator(SET_QUIZES);
export const resetAnswer = Creator(RESET_ANSWER);

export const goBackQuiz = Creator(GO_BACK_QUIZ);
export const goNextQuiz = Creator(GO_NEXT_QUIZ);

export const setQuizIndex = Creator(SET_QUIZ_INDEX);


export const randomQuizes = () => {
  return take(shuffle(quizes), DEFAULT_QUIZ_AMOUNT);
}

export const checkAnswers = (quizes, answers) => {
  let correct = 0;
  return {
    result: quizes.map((q, index) => {
      const result = q.solve === answers[index];
      correct += result ? 1 : 0;
      return result;
    }),
    score: correct,
  }
}

export function* appWatcherSaga() {
}

const initial = {
  selectedAnswer: {},
  saveSolve: {},

  currentIndex: 0,
  quizes: [],
}

export default createReducer(initial, state => ({
  [RESET_ANSWER]: bool => ({
    ...state,
    selectedAnswer: {},
  }),

  [GO_BACK_QUIZ]: () => ({
    ...state,
    currentIndex: state.currentIndex - 1,
  }),
  [GO_NEXT_QUIZ]: () => ({
    ...state,
    currentIndex: state.currentIndex + 1,
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
