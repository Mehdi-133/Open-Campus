const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "validation failed",
        error: result.error.issues,
      });
    }
    req.body = result.data;
    next();
  };
};

export default validate;
// we can call this as a middleware factory whiche is a function that create  middleware.
