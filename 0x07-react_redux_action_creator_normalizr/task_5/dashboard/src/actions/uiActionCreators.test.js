import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('test for four action types', () => {
  it('returns the correct action and user object for login', () => {
    const user = { email: 'test@email.com', password: 'pass1234' };
    const expectedObject = { type: LOGIN, user };

    const action = login(user.email, user.password);
    expect(action).toEqual(expectedObject);
  });

  it('returns the correct action for logout', () => {
    const action = logout();
    expect(action).toEqual({ type: LOGOUT });
  });

  it('returns the correct action for displayNotificationDrawer', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('returns the correct action for hideNotificationDrawer', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
