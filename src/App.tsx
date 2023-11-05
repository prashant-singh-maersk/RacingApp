import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

interface NameType {
    nativeName: string
}
interface LanguageType {
    [key: string]: NameType
    en: NameType
    es: NameType
}

const languages: LanguageType = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Spanish' },
}

function App() {
    const [count, setCount] = useState(0)
    const { t, i18n } = useTranslation()

    return (
        <>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            {Object.keys(languages).map((lng: string) => (
                <button
                    key={lng}
                    style={{
                        fontWeight:
                            i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                        marginLeft: '20px',
                    }}
                    type='submit'
                    onClick={() => i18n.changeLanguage(lng)}>
                    {(languages[lng] as NameType).nativeName}
                </button>
            ))}
            <h1>Vite + React + CI</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>{t('title')}</p>
            </div>
            <p className='read-the-docs'>{t('description')}</p>
        </>
    )
}

export default App
