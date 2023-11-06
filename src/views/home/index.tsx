import React from 'react';
import './styles/index.scss';
import Button from '../../components/button';

const Home: React.FC = () => {
    return (
        <section className='home flex flex-align-center flex-justify-center'>
            <div className='overlay'></div>
            <div className='content'>
                <h2 className='title'>EXPERIENCE THE THRILL OF SPEED</h2>
                <Button text='About Us' clickHandler={() => console.log(1)}/>
            </div>
        </section>
    );

}

export default Home;