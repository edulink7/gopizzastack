const {User} = require('../models')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body
    const { source } = req.params
    //console.log(source, typeof(source))
    const appRoute = "app"
    const webRoute = "web"

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    if( !(user.client) && source === appRoute){
      return res.status(400).json({ error: 'This user is not allowed in app' })
    }

    if( user.client && source === webRoute){
      return res.status(400).json({ error: 'This user is not allowed in web' })
    }

    if(source !== appRoute && source !== webRoute){
      return res.status(400).json({ error: 'Invalid route option' })      
    }

    return res.json({ user, token: user.generateToken(user) })
  }
}

module.exports = new SessionController()
