import React from 'react'

type PasswordLiProps = {
  el: {
    id: string
    for: string
    name: string
    password: string
  }
}

const PasswordLi: React.FC<PasswordLiProps> = ({ el }) => {
  return (
    <li className="bg-slate-300 px-3 py-3">
      <h6 className="font-semibold text-lg">
        {el.for}-{el.name}
      </h6>
      <p className="text-sm">{el.password}</p>
    </li>
  )
}

export default PasswordLi
