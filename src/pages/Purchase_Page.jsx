import { ArtistCollective } from "../Data/ArtistCollective";
import { ArtworkStorage } from "../Data/ArtworkStorage";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterBar from "../components/FooterBar";

const Purchase_Page = () => {
    const [ isDigital, setIsDigital ] = useState(false);
    const [ artwork, setArtwork ] = useState(null);
    const [ artist, setArtist ] = useState(null);
    const [ isloading, setIsloading] = useState(true);
    let navigate = useNavigate();

    let { Id } = useParams();

    useEffect(() => {
        const findArtwork = ArtworkStorage.find(artwork => artwork.id === Id);
        if (findArtwork) {
            setArtwork(findArtwork);
            setArtist(ArtistCollective.find(artist => artist.id === findArtwork.artistId));
        }
    }, [Id])

    useEffect(() => {
        if (artwork === null){
            setIsloading(true);
        } else {
            setIsloading(false);
        }
            
        return () => { setIsloading(true) }
    }, [artwork])

    return (
        < >
            {!isloading && (<>
                <figure className="bg-[#171515] py-32 px-16">
                    <img className="w-full mx-auto xl:w-auto xl:h-[90svh] aspect-[9/16] object-cover rounded-3xl border border-white" src={`${artwork.previewPicture}`}/>
                </figure>

                <main className="flex gap-10 px-20 xl:px-40 py-24 bg-[#FFFDF9]">
                    <section className="flex-[0.5] xl:flex-[0.3] flex flex-col justify-between gap-4">
                        <section className="flex flex-col gap-4">
                            <h1 className="text-3xl mb-4 font-serif font-bold">SAMPLES</h1>
                            <img className="w-full aspect-[3/2.5] object-cover" src="/GalerieWebsite/assets/ProductSample/S1.png"/>
                            <img className="w-full aspect-[3/2.5] object-cover" src="/GalerieWebsite/assets/ProductSample/S2.png"/>
                            <img className="w-full aspect-[3/2.5] object-cover" src="/GalerieWebsite/assets/ProductSample/S3.png"/>
                            <img className="w-full aspect-[3/2.5] object-cover" src="/GalerieWebsite/assets/ProductSample/S4.png"/>
                            <img className="w-full aspect-[3/2.5] object-cover" src="/GalerieWebsite/assets/ProductSample/SFrame.png"/>
                        </section>

                        <section className="flex flex-col gap-2">
                            <strong>TRY IN REALITY</strong>
                            <img className="w-[50%] xl:w-[25%] aspect-square object-contain" src="/GalerieWebsite/assets/RandomQR.png"/>
                        </section>
                    </section>

                    <span className="border border-black mx-4"/>

                    <section className="flex-[1] flex flex-col gap-5">
                        <section className="flex gap-4 text-lg xl:text-2xl">
                            <button className={`flex-1 ${!isDigital ? "bg-yellow-600 text-white" : "bg-transparent border border-black"} py-4 rounded-3xl`} onClick={() => setIsDigital(false)}>Original</button>
                            <button className={`flex-1 ${isDigital ? "bg-yellow-600 text-white" : "bg-transparent border border-black"} py-4 rounded-3xl`} onClick={() => setIsDigital(true)}>Digital Print</button>
                        </section>

                        <h1 className="uppercase mt-8 text-5xl xl:text-7xl font-serif">Vase of Flowers</h1>

                        <span className="border-b border-black"/>

                        <section className="grid grid-rows-2 items-end grid-cols-[auto_1fr]">
                            <img className="w-[4rem] xl:w-[6rem] rounded-[50%] row-span-2 object-cover aspect-square bg-contain mr-4" src={`${artist.portrait}`}/>
                            <p className="text-xl xl:text-2xl font-light">Artist</p>
                            <p className="text-2xl xl:text-3xl">{artist.name}</p>
                        </section>

                        <section className="grid grid-cols-[0.3fr_1fr] grid-rows-4 text-xl">
                            <p className="mt-auto text-base font-bold">Year</p>
                            <p className="mt-auto text-base font-bold">Medium</p>

                            <p className="xl:mb-4 font-light">{artwork.productionYear}</p>
                            <p className="xl:mb-4 font-light">{artwork.medium}</p>

                            <p className="mt-auto col-span-2 text-base font-bold">Dimensions</p>
                            <p className="col-span-2 font-light">{artwork.dimension}</p>
                        </section>

                        <section className="py-4 border-y border-black">
                            <strong className="font-semibold text-lg">Tools</strong>
                            <p className="text-xl font-light">Drawing, colourful aryclic paint on the canva</p>
                        </section>

                        {/* Digital Print Mode */}
                        {isDigital && (<>
                            <h4 className="font-bold text-xl">Open Edition Prints Available:</h4>
                            <section className="flex flex-col gap-2 bg-[#EFEBE4] p-4">
                                <label className="text-lg font-medium">Select a Material</label>
                                <select className="mb-2 py-3 px-4 bg-white">
                                    <option>Fine Art Paper</option>
                                </select>

                                <label className="text-lg font-medium">Select a Size</label>
                                <select className="mb-2 py-3 px-4 bg-white">
                                    <option>20.3 x 30.5 cm (RM90)</option>
                                </select>

                                <label className="text-lg font-medium">Add a frame</label>
                                <select className="mb-2 py-3 px-4 bg-white">
                                    <option>White Frame (RM50)</option>
                                </select>
                            </section>
                        </>)}

                        <section className="flex gap-2">
                            <header className="flex-1 flex flex-col gap-2">
                                <h4 className="text-2xl font-semibold">Price</h4>
                                <h1 className="mt-auto text-4xl font-bold">MYR {artwork.physicalPrice}</h1>
                            </header>

                            <section className="flex-[0.5] flex flex-col justify-end gap-2">
                                <button className="bg-black text-white font-bold py-2 " onClick={() => navigate("/GalerieWebsite/Cart")}>Add to Cart</button>
                                {/* <button className="border border-black bg-white py-2 text-xs">Chat with the artist</button> */}
                            </section>
                        </section>

                        <section className="flex flex-col gap-2 text-lg py-6 border-y border-black">
                            <strong className="text-xl mb-4">Shipping & Returns</strong>
                            <p><strong className="font-semibold">Delivery Time:</strong> Typically 5-7 business days for domestic shipments, 10-14 business days for international shipments.</p>

                            <p><strong className="font-semibold">Returns:</strong> 7-day return policy. Visit our help section for more information.</p>

                            <p><strong className="font-semibold">Delivery Time:</strong> Shipping is included.</p>
                        </section>

                        {/* More artworks from this artist */}
                        {/* <section className="flex flex-col gap-4">
                            <strong className="text-xl">More artworks from this artist</strong>

                            <button className="bg-black h-48 xl:h-64 aspect-[9/16] py-4 px-6 flex flex-col justify-end items-start rounded-2xl object-cover text-white">
                                <h5 className="text-lg">Garland of Fruit and Flowers</h5>
                                <p className="font-light">Jan Davidsz. de Heem</p>
                            </button>

                            <button className="bg-black h-48 xl:h-64 aspect-[9/16] py-4 px-6 flex flex-col justify-end items-start rounded-2xl object-cover text-white">
                                <h5 className="text-lg">Still Life with Flowers in a Glass Vase</h5>
                                <p className="font-light">Jan Davidsz. de Heem</p>
                            </button>
                        </section> */}

                    </section>
                </main>
            </>)}

            <FooterBar/>
        </>
    )
}

export default Purchase_Page;