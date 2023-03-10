import { dataPopuler } from "@/pages/api/data";
import CardPopulerCar from "./CardPopulerCar";

function Carousel() {

    return (
        <div className="relative">
            <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth gap-8 scrollbar-hide">
                {dataPopuler.map((item) => (
                    <div key={item.id}>
                        <CardPopulerCar title={item.title} type={item.type} img={item.img} tank={item.tank} gear={item.gear} seat={item.seat} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;