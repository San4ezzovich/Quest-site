import React, {useState} from 'react';
import style from './FirstLevel.module.css'
import Shelby from "../../components/Shelby/Shelby";
import Card from "../../components/Card/Card";

const FirstLevel = () => {


    return (
        <div className='background'>
            <div className={style.cardList}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />


            </div>
            <Shelby />
        </div>
    );
};

export default FirstLevel;