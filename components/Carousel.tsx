import CardPopulerCar from "./CardPopulerCar";

function Carousel() {

    return (
        <div className="relative">
            <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth gap-8 scrollbar-hide">
                <div>
                    <CardPopulerCar className="-ml-3" />
                </div>
                <div>
                    <CardPopulerCar />
                </div>
                <div>
                    <CardPopulerCar />
                </div>
                <div>
                    <CardPopulerCar />
                </div>
            </div>
        </div>
    );
}

export default Carousel;