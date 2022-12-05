import React, { useEffect, useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Digite seu e-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Digite uma senha"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit" disabled={isButtonDisabled}>
        Cadastrar
      </button>
    </form>
  )
}
