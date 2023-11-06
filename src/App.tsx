import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import { route } from './router/route'
import './App.scss'

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
