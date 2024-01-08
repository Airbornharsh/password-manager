'use client'
import PasswordLi from '@/components/PasswordLi'
import { SetStateAction, useState } from 'react'
import data from '@/assets/data.json'
import { decryptMessage, encryptMessage } from '@/assets/Functions/Encryption'

export default function Home() {
  const [secretKey, setSecretKey] = useState('')
  const [updatedData, setUpdatedData] = useState([...data])

  const onReveal = async () => {
    const newData: SetStateAction<
      { id: string; for: string; name: string; password: string }[]
    > = []
    updatedData.forEach((el) => {
      const decryptedFor = decryptMessage(
        secretKey.trim(),
        el.for.toString().trim(),
      )
      const decryptedName = decryptMessage(
        secretKey.trim(),
        el.name.toString().trim(),
      )
      const decryptedPassword = decryptMessage(
        secretKey.trim(),
        el.password.toString().trim(),
      )
      if (!decryptedPassword) {
        alert('Wrong Secret Key')
      }
      el.for = decryptedFor
      el.name = decryptedName
      el.password = decryptedPassword
      newData.push(el)
    })

    setUpdatedData(newData)
  }

  const onEncrypt = async () => {
    console.log(encryptMessage(secretKey, 'Google'))
    console.log(encryptMessage(secretKey, 'harshkeshri1234567@gmail.com'))
    console.log(encryptMessage(secretKey, 'HelloWorld'))
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="mt-10 text-3xl font-bold">Password Generator</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="bg-gray-200 px-2 py-1"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="Enter Secret Key"
        />
        <button onClick={onReveal}>Reveal</button>
        <button onClick={onEncrypt}>Encrypt</button>
      </div>
      <div>
        <ul className="flex flex-col items-center">
          {updatedData.map((key) => {
            return <PasswordLi key={key.name} el={key} />
          })}
        </ul>
      </div>
    </div>
  )
}
