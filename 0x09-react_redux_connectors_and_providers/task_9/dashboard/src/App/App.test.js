import React from 'react';
import { fromJS } from 'immutable';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';

describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('Does not crash', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
  });

  describe('Renders correctly', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should contain the Notifications component', () => {
      expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it('should contain the Header component', () => {
      expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should contain the Login component', () => {
      expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
      expect(wrapper.find('Footer')).toHaveLength(1);
    });

    it('does not display CourseList', () => {
      expect(wrapper.find('CourseList')).toHaveLength(0);
    });

    it('should have default state displayDrawer as false', () => {
      expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('returns the correct mapStateToProps object', () => {
      const state = {
        uiReducer: {
          isUserLoggedIn: true,
        },
      };

      const result = mapStateToProps(state);

      expect(result).toEqual({
        isLoggedIn: true,
      });
    });

    it('returns the correct mapDispatchToProps object', () => {
      let state = fromJS({
        isUserLoggedIn: true,
      });

      const result = mapStateToProps(state);
      expect(result).toEqual({
        isLoggedIn: true,
      });
    });

    it('mapStateToProps returns the right object from displayDrawer', () => {
      let state = fromJS({
        isNotificationDrawerVisible: true,
      });

      const result = mapStateToProps(state);
      expect(result).toEqual({
        displayDrawer: true,
      });
    });
  });

  describe('App Redux', () => {
    it('mapStateToProps returns the right object from user login', () => {
      let state = fromJS({
        isUserLoggedIn: true,
      });

      const result = mapStateToProps(state);

      expect(result).toEqual({
        isLoggedIn: true,
      });
    });

    it('mapStateToProps returns the right object from displayDrawer', () => {
      let state = fromJS({
        isNotificationDrawerVisible: true,
      });

      const result = mapStateToProps(state);

      expect(result).toEqual({
        displayDrawer: true,
      });
    });
  });
});