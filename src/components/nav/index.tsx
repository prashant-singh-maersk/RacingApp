import React from 'react'
import './styles/index.scss'
import { route } from '../../router/route'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
    return (
        <nav className='nav flex flex-align-center'>
            <div
                className='collapse navbar-collapse menu-ui-design'
                id='nav-menu'>
                <ul className='nav-items-wrapper'>
                    {route.map(({ path, name }, index: number) => {
                        return (
                            <li className='nav-items' key={index}>
                                <Link to={path}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
