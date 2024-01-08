import CryptoJS from 'crypto-js'

// const key = process.env.NEXT_PUBLIC_ENCRYTION_SECRET_KEY

export const encryptMessage = (secretKey: string, message: string) => {
  const ciphertext = CryptoJS.AES.encrypt(message, secretKey!).toString()
  return ciphertext
}

export const decryptMessage = (
  decryptKey: string,
  encryptedMessage: string,
) => {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, decryptKey)
  const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8)
  return decryptedText
}
