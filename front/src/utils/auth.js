// email에 @와 .이 포함
export const checkEmail = (email) => {
  const regexEmail = /(?=.*[@])(?=.*[.])/;
  if (!regexEmail.test(email)) {
    return false;
  }
  return true;
};

// password 8자리 이상
export const checkPassword = (password) => {
  if (password.length < 8) {
    return false;
  }
  return true;
};
