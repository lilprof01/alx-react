import { Map, fromJS } from 'immutable';
import courseReducer, { initialCourseState } from './courseReducer';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

import coursesNormalizer from '../schema/courses';

describe('courseReducer', () => {
  it('returns an array for default state', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(Map(initialCourseState));
  });

  it('returns the data passed for FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],
    };

    const expectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });

  it('returns data with the right items updated for SELECT_COURSE action', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initialState)),
      action
    );
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });
  it('returns data with the right items updated for UNSELECT_COURSE action', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const state = courseReducer(
      fromJS(coursesNormalizer(initialState)),
      action
    );
    expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
  });
});
