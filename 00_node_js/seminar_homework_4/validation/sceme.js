const Joi = require("joi");

const userSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  secondName: Joi.string().min(2).required(),
  age: Joi.number().min(0).required(),
  city: Joi.string().min(2).required(),
});

const idSchema = Joi.object({ id: Joi.number().required() });

module.exports = { userSchema, idSchema };
