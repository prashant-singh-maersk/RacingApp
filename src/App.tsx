import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'

import { route } from './router/route'

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        {route.map((item) => {
                            const { path, name, element: Element } = item
                            return (
                                <Route
                                    path={path}
                                    key={name}
                                    element={<Element />}
                                />
                            )
                        })}
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
