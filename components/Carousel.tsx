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
                padding: '50px',
                rewind: true,
                gap: '1rem',
                start: 2,
                perPage: 2,
                mediaQuery: 'max',
                breakpoints: {
                    600: {
                        perPage: 1,
                        padding: '60px',
                    },
                    800: {
                        perPage: 2,
                        padding: '55px',
                    },
                    1000: {
                        perPage: 3,
                        padding: '50px',
                    },
                    1200: {
                        perPage: 3,
                        padding: '55px',
                    },
                    1600: {
                        perPage: 4,
                        padding: '60px',
                    },
                    2000: {
                        perPage: 5,
                        padding: '60px',
                    }
                }
            }}
        >
            {dataPopuler.map((item) => (
                <SplideSlide key={item.id}>
                    <div className="mx-auto">
                        <CardPopulerCar title={item.title} button={`/detail/${item.id}`} type={item.type} img={item.img} tank={item.tank} gear={item.gear} seat={item.seat} price={item.price} />
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    );
}

export default Carousel;