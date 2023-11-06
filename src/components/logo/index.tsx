import React from 'react'
import logo_image_large from '../../assets/logo_image_large.jpg'
import logo_image_small from '../../assets/logo_image_small.jpg'
import './styles/index.scss'

interface LogoProps {
    classValue?: string
}
const Logo: React.FC<LogoProps> = (props) => {
    const { classValue } = props

    return (
        <a className={`${classValue} app-logo`} href='/'>
            <picture>
                <source media='(min-width: 1200px)' srcSet={logo_image_large} />
                <img
                    src={logo_image_small}
                    alt='Responsive App Logo'
                    className='app-logo-image'
                />
            </picture>
        </a>
    )
}

export default Logo
