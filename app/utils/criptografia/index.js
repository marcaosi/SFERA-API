const KEY = "#sfer@!"

const criptografar = (dado) => {
    const crypto = require("crypto")
    
    const cipher = crypto.createCipher("aes256", KEY)
    cipher.update(dado)
    return cipher.final("hex")
}

module.exports = {
    criptografar, KEY
}