import { schema, normalize } from 'normalizr';
import * as data from '../../../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(data.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const userNotifications = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      userNotifications.push(messages[notifications[property].context]);
    }
  }

  return userNotifications;
};

export { getAllNotificationsByUser, normalizedData };
