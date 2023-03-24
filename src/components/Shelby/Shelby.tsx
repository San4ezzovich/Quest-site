import React, {useEffect, useState} from 'react';
import style from "./Shelby.module.css";
import {useDispatch, useSelector} from "react-redux";
import store, {explanationAction, stopExplanation} from "../../redux/rootReducer";
import state from "../../redux/store";

const Shelby = () => {

    const [isHovered, setIsHovered] = useState(true);
    const [animation, setAnimation] = useState('');


    const dispatch = useDispatch();
    const message = useSelector((state: any) => store.getState().firstLevel.text);
    // let timeoutRef: any = useRef(null);
    // const stop = useSelector(state => store.getState().firstLevel.stopExplanation)
    console.log(stop)
    const hovered = {
        opacity: isHovered ? '0' : '1',
        animation: animation,
    }
    // const handleMouseOver = (event: any) => {
    //     if (event.target === event.currentTarget) {
    //         timeoutRef.current = setTimeout(() => {
    //             setIsHovered(false);
    //             setAnimation('message 1s ease 0s 1 normal forwards');
    //         }, 4000);
    //     }
    //
    // }
    //
    // const handleMouseOut = (event: any) => {
    //     if (event.target === event.currentTarget) {
    //         setIsHovered(true);
    //         clearTimeout(timeoutRef.current);
    //         setAnimation('message-out 1s ease 0s 1 normal forwards');
    //     }
    // }

    const change = () => {
        setAnimation('message 1s ease 0s 1 normal forwards')
        setTimeout(() => {
            setAnimation('message-out 1s ease 0s 1 normal forwards')
        }, 2000)

    }

    useEffect(() => {
        const delay = async () => {

            // @ts-ignore
            dispatch(explanationAction());
            for (let i = 0; i < state.messages.firstLevel.explanation.length; i++) {
                if (stop){
                    break;
                }
                await new Promise<void>(resolve => setTimeout(() => {
                    change();
                    resolve();
                }, 3000));
            }
        };
        delay();
    }, []);


    return (
        <div className={style.shelby}
             // onMouseOver={handleMouseOver}
             // onMouseOut={handleMouseOut}
            onClick={()=>dispatch(stopExplanation())}
        >
            <div className={`${style.message}`}
                 style={hovered}
            >
                {message}
            </div>
        </div>
    );
};
export default Shelby;