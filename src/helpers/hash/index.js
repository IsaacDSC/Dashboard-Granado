const bcrypt = require('bcrypt')

const hashPass = async(password) => {
    try {
        const hash = await bcrypt.hash(password, 10)
        return hash
    } catch (error) {
        console.log(error)
        return false
    }
}


module.exports = { hashPass }