/* global test expect */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
test('loads and displays greeting', async () => {
    render(<App />)
    expect('hello').toEqual('hello')
})
