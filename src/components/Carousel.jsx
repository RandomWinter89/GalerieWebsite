import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({collection}) => {
    const [indexView, setIndexView] = useState(0);
    const navigate = useNavigate();

    return (
        <section className="text-white relative px-32 pt-32 pb-8 mb-8 h-[80svh] max-lg:h-[32rem] max-lg:px-16">
            {/* Image */}
            <section className="z-0 absolute w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth top-0 left-0 scrollbar-hide">
                {collection.map((data) => 
                    <img key={data.id} id={data.id} className="flex-[1_0_100%] snap-start object-cover object-top" src={data.thumbnail}/>
                )}
            </section>

            {/* Content */}
            <div className="z-10 relative h-full flex flex-col gap-4">
                <header className="flex flex-col gap-4 mt-auto">
                    <h1 className="font-serif text-4xl max-lg:text-2xl max-sm:text-lg">Today's artist -<br/> {collection[indexView].name}</h1>
                    <p className="w-[46ch] font-light text-lg max-lg:text-sm">{collection[indexView].quote}</p>
                    <button className="w-fit font-semibold underline uppercase text-lg" onClick={() => navigate(`/Artist/${collection[indexView].id}`)}>Read More</button>
                </header>

                <nav className="flex gap-1 h-2 mt-auto mx-auto">
                    {collection.map((data, index) => 
                        <a key={index} href={`#${data.id}`} onClick={() => setIndexView(index)} 
                            className={`bg-white w-2 aspect-square rounded-[50%] ${index == indexView ? "opacity-100" : "opacity-50"} hover:opacity-100`}
                        />
                    )}
                </nav>
            </div>
        </section>
    )
}

export default Carousel;