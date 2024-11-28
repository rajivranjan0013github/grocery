import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'reshmi', {
    expiresIn: '30d',
  })
}

export default generateToken

