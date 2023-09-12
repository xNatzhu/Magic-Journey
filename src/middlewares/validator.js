export const validator = (schema) => {

    return (req, res, next) => {

      try {
         schema.validate(req.body, { abortEarly: false });
        next();
        
      } catch (error) {
        console.error(error);
        res.status(400).json({
          error,
        });
      }
    };
  };
  