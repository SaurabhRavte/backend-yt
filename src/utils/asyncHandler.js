const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = () => {}; //Normal
// const asyncHandler = (func) => () =>{} // function calling funtion;
// const asyncHandler = (func) => async () =>{} // function calling funtion;

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      sucess: false,
      message: err.message,
    });
  }
};
*/
