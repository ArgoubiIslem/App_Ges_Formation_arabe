import jwt from 'jsonwebtoken';
import { getStaticPaths } from 'next';
const signToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      nomP: user.nomP,
      email: user.email,
      isAdmin: user.isAdmin,
    },

    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export { signToken };
