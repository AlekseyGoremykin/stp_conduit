export function getUser({ user }) {
  return user;
}

export function getUserId({ user }) {
  return user._id;
}

export function getAuthenticated({ user }) {
  return user !== null;
}

export function getGetStarted({ user }) {
  return user.getStarted;
}
