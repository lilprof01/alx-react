export function getFullYear () {
  return new Date().getFullYear();
}

export function getFooterCopy (isIndex) {
  return isIndex ? 'ALX School' : 'ALX School main dashboard';
}

export function getLatestNotification () {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
