import jwt from "jsonwebtoken";
import user from "../modeles/user.js";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifUser = (req, res, next) => {
  verifyToken(req, res,() => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized!"));
    }
  });
};


export const verifAdmin = (req, res, next) => {
    verifyToken(req, res,() => {
      if ( req.user.isAdmin) {
        next();
      } else {
        if (err) return next(createError(403, "You are not authorized!"));
      }
    });
  };
