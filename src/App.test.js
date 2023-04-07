import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App';

test('can receive a new user and show it on a list', () => {
  render(<App />)

  const nameInput= screen.getByRole('textbox',{
    name:/name/i
  })
  const emailInput= screen.getByRole('textbox',{
    name:/email/i
  })

  user.click(nameInput)
  user.keyboard('rudra')
  user.click(emailInput)
  user.keyboard('rudra@gmail.com')

  user.click(button)

  screen.debug()
})