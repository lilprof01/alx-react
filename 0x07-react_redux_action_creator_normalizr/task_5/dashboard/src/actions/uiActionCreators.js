import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

// Bounded actions

export const boundLogin = (email, password) => (dispatch) => {
  dispatch(login(email, password))
}

export const dispatchLogout = () => dispatch => {
  dispatch(logout())
}

export const boundDisplayNotificationDrawer = () => (dispatch) => {
  dispatch(displayNotificationDrawer())
}

export const boundHideNotificationDrawer = () => (dispatch) => {
  dispatch(hideNotificationDrawer())
}