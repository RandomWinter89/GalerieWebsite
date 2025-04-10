import { FaTwitter, FaFacebook  } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { ArtistCollective } from "../Data/ArtistCollective";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterBar from "../components/FooterBar";

const Artist_Page = () => {
    const [ artist, setArtist ] = useState(null);
    const [ isloading, setIsloading] = useState(true);

    const { Id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const findArtist = ArtistCollective.find(artist => artist.id === Id);
        if (findArtist) {
            setArtist(findArtist);
        }
    }, [Id])

    useEffect(() => {
        if (artist === null){
            setIsloading(true);
        } else {
            setIsloading(false);
        }
            
        return () => { setIsloading(true) }
    }, [artist])

    const ExtractParagraph = (string) => {
        return string.split("@");
    }

    return (
        < >
            { !isloading && <>
                <section className={"h-[48rem] xl:h-[52rem] pt-24 pb-12 px-20 flex flex-col gap-6 justify-end text-white bg-cover bg-right-top bg-no-repeat"} style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${artist.portrait})` }}>
                    <h3 className="text-2xl xl:text-4xl font-semibold">{artist.year}</h3>
                    <h1 className="text-5xl xl:text-7xl font-serif font-bold">{artist.name}</h1>
                    <span className="w-8 my-2 border border-[#CBB692]"/>
                    <p className="w-[40ch] xl:w-auto text-xl xl:text-2xl font-light">{artist.quote}</p>
                    <p className="w-fit py-2 px-12 border border-white rounded-full">Commission {artist.name}</p>

                    <nav className="mt-12 flex gap-2 text-2xl">
                        <FaTwitter />
                        <FaFacebook />
                        <BiLogoInstagramAlt />
                    </nav>
                </section>

                <main className="flex flex-col gap-10 px-20 xl:px-40 py-20 bg-[#FFFDF9]">
                    <span className="h-48 mb-12 mx-auto border border-black"/>

                    <section className="flex flex-col gap-8">
                        <h1 className="mx-auto text-4xl font-serif font-light">ARTWORKS</h1>
                        <div className="flex gap-6">
                            {/* Horizontal First Slot */}
                            {/* onClick={() => navigate(`/AR/${artist.artworks[0].id}`)} */}
                            <section className="flex-1 flex flex-col gap-6">
                                <article className="cursor-pointer" >
                                    <img className="w-full aspect-[16/9] object-cover" src={artist.artworks[0].picture}/>
                                    <p className="text-lg font-medium">Garland of Fruit and Flowers</p>
                                    <p className="text-sm font-light">Jan Davidsz. de Heem</p>
                                </article>

                                <article>
                                    <img className="w-full aspect-[16/9] object-cover" src={artist.artworks[1].picture}/>
                                    <p className="text-lg font-medium">Garland of Fruit and Flowers</p>
                                    <p className="text-sm font-light">Jan Davidsz. de Heem</p>
                                </article>
                            </section>

                            {/* Vertical Second Slot */}
                            <section className="flex-[0.6]">
                                <article>
                                    <img className="w-full aspect-[9/16] object-cover" src={artist.artworks[2].picture}/>
                                    <p className="text-lg font-medium">Garland of Fruit and Flowers</p>
                                    <p className="text-sm font-light">Jan Davidsz. de Heem</p>
                                </article>
                            </section>
                        </div>
                    </section>

                    <span className="h-48 my-12 mx-auto border border-black"/>

                    {/* Video */}
                    <section className="flex flex-col gap-6 p-12 bg-[#FFF8EB]">
                        <iframe className="w-full aspect-[16/9]" src={`${artist.video}`}/>
                        <h2 className="text-4xl font-serif font-extralight uppercase">Biography</h2>
                        <article className="flex flex-col gap-6 font-light text-lg">
                            {ExtractParagraph(artist.biography).map((paragraph, index) => {
                                if (index === 0)
                                    return (<p key={index} className="first-letter:text-4xl first-letter:font-medium first-letter:text-[#CC9638]">{paragraph}</p>);

                                return (<p key={index}>{paragraph}</p>);
                            })}
                        </article>

                        <section className="ml-auto flex flex-col gap-2">
                            <h5 className="text-xl">Signature</h5>
                            <img className="h-14 aspect-[4/1] object-contain" src={`${artist.signature}`}/> 
                        </section>
                    </section>

                    <section className="flex flex-col gap-8">
                        <h1 className="text-4xl font-serif">PAST EXHIBITIONS</h1>

                        <article className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">Galeria — Cyberjaya, Malaysia</h1>
                            <p className="text-xl font-light">Aug 21, 2022 - Aug 29, 2022</p>
                        </article>

                        <article className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">KLA Art Gallery — Kuala Lumpur, Malaysia</h1>
                            <p className="text-xl font-light">May 22, 2022 - May 25, 2022</p>
                        </article>

                        <article className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">KLA Art Gallery — Kuala Lumpur, Malaysia</h1>
                            <p className="text-xl font-light">June 1, 2021 - June 5, 2021</p>
                        </article>
                    </section>
                </main>
            </>}

            <FooterBar />
        </>
    )
}

export default Artist_Page;