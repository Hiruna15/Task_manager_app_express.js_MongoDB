class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msge, statusCode) => {
  return new CustomAPIError(msge, statusCode);
};

export default { CustomAPIError, createCustomError };
