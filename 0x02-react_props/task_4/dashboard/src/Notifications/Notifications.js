import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';

export default function Notifications({ displayDrawer }) {
  function handleClose() {
    console.log('Close button has been clicked');
  }

  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          <p>
            Here is the list of notifications
            <button aria-label='Close' onClick={handleClose}>
              <img src={require('../assets/close-icon.png')} alt='Close icon' />
            </button>
          </p>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem
              type='urgent'
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};
