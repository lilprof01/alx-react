import * as notifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context);
};

export default getAllNotificationsByUser;
