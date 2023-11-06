import Home from '../views/home'
import About from '../views/about'

export const route = [
    {
        path: '/',
        element: Home,
        name: 'Home',
    },
    {
        path: '/about-us',
        element: About,
        name: 'About Us',
    },
]
