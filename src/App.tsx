import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import { route } from './router/route'
import './App.scss'
import Home from './views/home'

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        {route.map((item) => {
                            const { path, element: Element } = item
                            return <Route path={path} element={<Element />} />
                        })}
                        <Route path='*' element={<Home />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
