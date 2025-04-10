import { FaTwitter, FaFacebook  } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";

import { ArtistCollective } from "../Data/ArtistCollective";
import { ArtworkStorage } from "../Data/ArtworkStorage";

import { useState, useEffect } from "react";

const ArtworkStory_Page = () => {
    const [ artwork, setArtwork ] = useState(null);
    const [ artist, setArtist ] = useState(null);
    const [ isloading, setIsloading] = useState(true);
    let { Id } = useParams();

    let navigate = useNavigate();
    const toPurchasePage = (id) => {
        navigate(`/GalerieWebsite/Purchase/${id}`);
    }

    useEffect(() => {
        const findArtwork = ArtworkStorage.find(art => art.id === Id);
        if (findArtwork) {
            setArtwork(findArtwork);
            setArtist(ArtistCollective.find(artist => 
                artist.id === findArtwork.artistId
            ));
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

    const ExtractParagraph = (string) => {
        return string.split("@");
    }

    return (
        <main className="flex max-lg:flex-col">
            {!isloading && <>
                <aside className="flex-[0.4] max-lg:flex-1 flex flex-col gap-4 justify-between bg-black max-lg:hidden">
                    <img className="h-full object-[15%_75%] object-cover" src={artwork.previewPicture} />
                    {/* <img className="w-full aspect-[9/16] bg-red-950 object-cover" src={artist.portrait} /> */}
                    {/* <img className="w-full aspect-[9/16] bg-red-950 object-cover" src={artwork.previewPicture} /> */}
                </aside>

                <aside className="hidden max-lg:block">
                    <img className="w-full aspect-[16/9] bg-red-950 object-cover" src={artwork.previewPicture} />
                </aside>

                <article className="flex-1 flex flex-col gap-6 px-20 py-32 max-lg:py-12 bg-[#FFFCF1]">
                    {/* <button className="w-fit text-2xl font-light">LOVE</button> */}
                    <h1 className="uppercase text-5xl xl:text-7xl font-cinzel">{artwork.artworkName}</h1>

                    <section className="flex items-end">
                        {/* Profile */}
                        <div className="flex-1 flex gap-3 font-heebo">
                            <img className="w-14 h-14 aspect-square rounded-full object-cover object-top" src={artist.portrait}/>

                            <div className="flex-1 flex flex-col">
                                <p className="font-light xl:text-xl">Artist:</p>
                                <p className="font-medium text-lg cursor-pointer xl:text-2xl" onClick={() => navigate(`/GalerieWebsite/Artist/${artist.id}`)}>{artwork.artist}</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <nav className="flex gap-2 text-3xl">
                            <FaTwitter />
                            <FaFacebook />
                            <BiLogoInstagramAlt />
                        </nav>
                    </section>

                    <section className="py-6 grid grid-cols-[0.3fr_1fr] grid-rows-4 border-y border-black font-heebo">
                            <p className="mt-auto xl:text-2xl text-base font-bold">Year</p>
                            <p className="mt-auto xl:text-2xl font-bold">Medium</p>

                            <p className="xl:mb-4 font-light text-xl xl:text-3xl">{artwork.productionYear}</p>
                            <p className="xl:mb-4 font-light text-xl xl:text-3xl">{artwork.medium}</p>

                            <p className="mt-auto col-span-2 font-bold xl:text-2xl">Dimensions</p>
                            <p className="col-span-2 font-light text-xl xl:text-3xl">{artwork.dimension}</p>
                    </section>

                    <section className="flex flex-col gap-4 pb-6 border-b border-black text-lg font-light">
                        <h1 className="text-2xl font-medium">About the artist</h1>
                        {ExtractParagraph(artwork.aboutArtist).map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
                    </section>

                    <section className="flex flex-col gap-4 pb-6 text-lg font-light">
                        <h1 className="text-2xl font-medium">About the painting</h1>
                        {ExtractParagraph(artwork.aboutPainting).map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
                    </section>

                    <section className="flex justify-between gap-4 py-6 border-y border-black text-xl xl:text-3xl">
                        <strong>Ready to purchase?</strong>
                        <button onClick={() => toPurchasePage(artwork.id)}>------{'>'}</button>
                    </section>

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
                </article>
            </>}
        </main>
    )
}

export default ArtworkStory_Page;