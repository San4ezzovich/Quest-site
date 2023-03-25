import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import state from '../../redux/store';
import style from './MainPage.module.css';

const MainPage = () => {
    const navigate = useNavigate();
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ message, setMessage ] = useState('');

    const storage = localStorage.getItem('storage');

    const messageList = storage ? state.messages.greeting.second : state.messages.greeting.first;

    useEffect(() => {
        if (currentIndex === messageList.length) {
            localStorage.setItem('storage', JSON.stringify(true));
            setTimeout(() => navigate('/first-level'), 2000);
            return null;
        }
        const timer = setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setMessage(messageList[currentIndex]);
        }, 2000);

        return () => clearTimeout(timer);
    }, [ currentIndex, messageList, navigate ]);

    return (
        <div className={ `${style.background} background` }>
            <div
                style={ { animation: `myAnim 2s ease-in-out 0s ${messageList.length + 1} normal forwards` } }
            >
                {message}
            </div>
        </div>
    );
};

export default MainPage;
