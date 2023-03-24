import React, {useState} from 'react';
import style from './Card.module.css'
import {stopExplanation} from "../../redux/rootReducer";
import {useDispatch} from "react-redux";

const Card = () => {
    const dispatch = useDispatch();

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        dispatch(stopExplanation());
    };

    return (
        <div className={`${style.card} ${isFlipped ? style.flipped : ''}`} onClick={handleClick}>
            <div className={style.front}>
                <img src="https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000" alt=""/>
            </div>
            <div className={style.back}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png" alt=""/>
            </div>
        </div>
    );
};

export default Card;