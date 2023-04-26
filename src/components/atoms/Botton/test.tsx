import Botton from '.'

import { render, screen } from '@testing-library/react'

describe('Botton', () => {
  it('renders correctly', () => {
    render(<Botton />)
    expect(screen.getByRole('button', { name: 'Ativar' }))
  })
})
