import React, { useEffect, useState } from 'react'
import logo from '../../../assets/images/logo.png'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  useEffect(() => {
    if (name && email && password) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [name, email, password])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-4/5 h-4/5 shadow-xl border rounded-lg bg-slate-200"
    >
      <img src={logo} alt="" className="w-40 h-30" />
      <label htmlFor="name" className="text-slate-700">
        Nome
      </label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Digite seu nome"
        onChange={(event) => setName(event.target.value)}
        className="border border-gray-300 rounded-md p-2 bg-slate-100"
      />

      <label htmlFor="email" className="text-slate-700">
        E-mail
      </label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Digite seu e-mail"
        onChange={(event) => setEmail(event.target.value)}
        className="border border-gray-300 rounded-md p-2 bg-slate-100"
      />

      <label htmlFor="password" className="text-slate-700">
        Senha{' '}
      </label>
      <input
        type="password"
        id="password"
        value={password}
        placeholder="Digite uma senha"
        onChange={(event) => setPassword(event.target.value)}
        className="border border-gray-300 rounded-md p-2 bg-slate-100"
      />

      <button
        type="submit"
        disabled={isButtonDisabled}
        className="bg-orange-500 text-white rounded-md py-2 px-8 mt-4 hover:bg-orange-600 cursor-pointer"
      >
        Cadastrar
      </button>
    </form>
  )
}
