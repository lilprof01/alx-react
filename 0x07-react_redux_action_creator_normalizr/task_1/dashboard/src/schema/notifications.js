import { schema, normalize } from 'normalizr';
import * as notifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context);
};

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications.default, [notification]);

export { getAllNotificationsByUser, normalizedData };
