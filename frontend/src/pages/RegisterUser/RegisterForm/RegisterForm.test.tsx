import { render, screen, fireEvent } from '@testing-library/react'
import { RegisterForm } from '.'

describe('<RegisterForm />', () => {
  it('o botão cadastrar deve estar desabilitado caso todos os campos não estejam preenchidos', () => {
    render(<RegisterForm />)
    const button = screen.getByRole('button', { name: /cadastrar/i })
    expect(button).toBeDisabled()
  })

  it('o botão cadastrar deve estar habilitado caso todos os campos estejam preenchidos', () => {
    render(<RegisterForm />)
    const button = screen.getByRole('button', { name: /cadastrar/i })
    const name = screen.getByPlaceholderText(/digite seu nome/i)
    const email = screen.getByPlaceholderText(/digite seu e-mail/i)
    const password = screen.getByPlaceholderText(/digite uma senha/i)

    fireEvent.change(name, { target: { value: 'John Doe' } })
    fireEvent.change(email, { target: { value: 'john@hotmail.com' } })
    fireEvent.change(password, { target: { value: '123456' } })

    expect(button).toBeEnabled()
  })
})
