function getHost() {
  if (process.env.LOCAL_SERVER) {
    return 'http://localhost:3000';
  }

  return process.env.NODE_ENV === 'development'
    ? 'https://codesandbox.dev'
    : 'https://codesandbox.io';
}

export default getHost();
