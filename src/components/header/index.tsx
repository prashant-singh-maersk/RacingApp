import React from 'react'
import Logo from '../logo'
import './styles/index.scss'
import Navigation from '../nav'

const Header: React.FC = () => {
    return (
        <header className='app-header'>
            <div className='container flex flex-justify-spaceBetween'>
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}

export default Header
