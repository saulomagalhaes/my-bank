import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { LoginForm } from '.'

describe('<LoginForm />', () => {
  it('o botão cadastrar deve estar desabilitado caso todos os campos não estejam preenchidos', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
    )
    const button = screen.getByRole('button', { name: /entrar/i })
    expect(button).toBeDisabled()
  })

  it('o botão cadastrar deve estar habilitado caso todos os campos estejam preenchidos', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
    )
    const button = screen.getByRole('button', { name: /entrar/i })
    const email = screen.getByPlaceholderText(/digite seu e-mail/i)
    const password = screen.getByPlaceholderText(/digite uma senha/i)

    fireEvent.change(email, { target: { value: 'john@hotmail.com' } })
    fireEvent.change(password, { target: { value: '123456' } })

    expect(button).toBeEnabled()
  })
})
