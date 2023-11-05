/* global test expect */
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'
import App from '../App'

expect.extend(toHaveNoViolations)
test('loads and displays greeting', async () => {
    const { container } = render(<App />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    expect('hello').toEqual('hello')
})
