import { useEffect, useState } from "react";
import FooterBar from "../components/FooterBar";

import { ExhibitionStorage } from "../Data/ExhibitionStorage";
import { ArtistCollective } from "../Data/ArtistCollective";
import { ArtworkStorage } from "../Data/ArtworkStorage";

import EventHeader from "../components/EventHeader";
import Container from "../components/Container";
import EventArticle from "../components/EventArticle";
import Carousel from "../components/Carousel";

import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const [ artistData ] = useState(ArtistCollective);
    const [ artworkData ] = useState(ArtworkStorage);
    const [ exhibitionData ] = useState(ExhibitionStorage);

    const navigate = useNavigate();

    return (
        < >
            <main className="bg-[#FFFDF9] min-h-svh flex flex-col gap-4 mb-16">
                {/* Slider */}
                {artistData.length !== 0 && <Carousel collection={artistData}/>}

                <Container>
                    <EventHeader
                        header={`Upcoming Exhibitions`}
                        desc={``}
                        ctaLink={`/Category/${0}`}
                    />

                    <EventArticle 
                        eventData={exhibitionData[0]} 
                        handleOpen={() => navigate(`/GalerieWebsite/Exhibition/${exhibitionData[0].id}`)}
                    />
                </Container>

                <span className="mx-auto h-32 my-4 border-l-2 border-black" />
                
                <Container>
                    <EventHeader 
                        header={`Feature Artworks`} 
                        desc={`In Galeria, we have more than 100 artists from Malaysia. Here are the feature artworks for this week`}
                        ctaLink={`/Collection`}
                    />

                    <section className="grid gap-6 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {artworkData.map((data, index) => 
                            <section key={index} className="w-full">
                                <div className="w-full h-[24rem] bg-cover bg-center flex justify-end items-start p-4 mb-3" style={{backgroundImage: `url(${data.previewPicture})`}} onClick={() => navigate(`/GalerieWebsite/Story/${data.id}`)}>
                                    {/* <button className="text-white font-extrabold">O</button> */}
                                </div>
                                <p className="text-lg/4 font-semibold">{data.artworkName}</p>
                                <p className="font-light">{data.artist}, {data.productionYear}</p>
                            </section>
                        )}
                    </section>
                </Container>
            </main>

            <FooterBar />
        </>
    )
}

export default Homepage;