'use client';

import {Button, Htag, P, Rating, Tag} from "@/components";
import React, {useEffect, useState} from "react";


export default function Home() {
    const [counter, setCounter] = useState<number>(0);

    const[rating, setRating]  = useState<number>(4);

        useEffect(() => {
            console.log('counter' + counter);
            return function cleanup() {
                console.log('Unmount');
            };
        });

    useEffect(() => {
        console.log('Mounted');
    }, []);

    console.log('I am home');
  return (

            <div>
            <Htag tag={'h1'}>{counter}</Htag>
            <Button appearance={"primary"} arrow={'right'} onClick={() => setCounter(x => x+1)}>Кнопка</Button>
            <Button appearance={"ghost"} arrow={'down'}>Кнопка</Button>
            <P size={'l'}>Большой</P>
            <P>Средний</P>
            <P size={'s'}>Маленький</P>
                <Tag size={'s'}>Ghost</Tag>
                <Tag size={'m'} color={"red"}>Red</Tag>
                <Tag size={'s'} color={"green"}>Green</Tag>
                <Tag color={'primary'} >Green</Tag>
                <Rating rating={rating} isEditable setRating={setRating} />


            </div>


         );
}
