import { dataPopuler } from "@/pages/api/data";
import CardPopulerCar from "./CardPopulerCar";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// // or only core styles
// import '@splidejs/react-splide/css/core';

function Carousel() {

    return (
        <Splide
            options={{
                padding: '4rem',
                gap: '1rem',
                rewind: true,
                start: 2,
            }}
        >
            {dataPopuler.map((item) => (
                <SplideSlide key={item.id}>
                    <CardPopulerCar title={item.title} button={`/detail/${item.id}`} type={item.type} img={item.img} tank={item.tank} gear={item.gear} seat={item.seat} price={item.price} />
                </SplideSlide>
            ))}
        </Splide>
    );
}

export default Carousel;