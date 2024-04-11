export const checkValidData = (email, password) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) {
    return "Please enter a valid email!";
  }

  if (!isPasswordValid) {
    return "Please enter a valid password! \n\n(Password must be at least 8 characters long and must contain atleast one capital letter and a special character)";
  }

  return null;
};
