import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ArtworkStorage } from "../Data/ArtworkStorage";
import FooterBar from "../components/FooterBar";

const MAXIMUM_DISPLAY = 3;

const ArtCollection_Page = () => {
    const [ artwork ] = useState(ArtworkStorage);
    const [ visibleCount, setVisibleCount] = useState(MAXIMUM_DISPLAY);
    const [ filterMode, setFilterMode ] = useState(false);

    const toggleFilterMode = () => setFilterMode(!filterMode);

    let navigate = useNavigate();
    const accessStory = (id) => navigate(`/GalerieWebsite/Story/${id}`);

    const loadMore = () => setVisibleCount((prev) => Math.min(prev + MAXIMUM_DISPLAY, artwork.length));

    return (
        < >
            <section className="h-[32rem] xl:h-[54rem] pt-24 flex bg-cover bg-center" style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/GalleryCollection.png)`}}>
                <img className="m-auto w-[80%] xl:w-[60%] aspect-[4/1] object-contain" src="/GalerieWebsite/assets/CollectionImage.png"/>
            </section>

            <main className="flex flex-col gap-28 px-20 py-24 bg-[#FFFDF9]">
                {/* Introduction */}
                {/* <section className="flex flex-col gap-6">
                    <button className="w-fit text-4xl font-semibold text-yellow-600" onClick={toggleFilterMode}>Filter by +</button>
                    
                    {filterMode && (
                        <div className="flex justify-between gap-4">
                            <section className="flex-1">
                                <h4 className="text-lg font-medium">MEDIUM</h4>
                                <input type="checkbox"/>
                                <label className="ml-2">All</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">Oil on canvas</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">Digital Illustration</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">Watercolour</label> <br/>
                            </section>

                            <section className="flex-1">
                                <h4 className="text-lg font-medium">ARTIST</h4>
                                <input type="checkbox"/>
                                <label className="ml-2">All</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">Roman Walt</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">Chris John</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">Jan Davidsz. de Heem</label> <br/>
                            </section>

                            <section className="flex-1">
                                <h4 className="text-lg font-medium">PRICE</h4>
                                <input type="checkbox"/>
                                <label className="ml-2">RM100 - RM500</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">RM500 - RM1000</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">RM1000 - RM5000</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">RM5000 Above</label> <br/>
                            </section>

                            <section className="flex-1">
                                <h4 className="text-lg font-medium">DIGITAL PRINTS</h4>
                                <input type="checkbox"/>
                                <label className="ml-2">Yes</label> <br/>

                                <input type="checkbox"/>
                                <label className="ml-2">No</label> <br/>
                            </section>
                        </div>
                    )}
                   
                </section> */}

                {artwork && artwork.slice(0, visibleCount).map((data, index) => 
                    <section key={index} className="flex flex-col gap-6">
                        <article className="shadow-2xl w-full flex px-6 py-4 bg-center bg-cover bg-no-repeat cursor-pointer" style={{backgroundImage: `linear-gradient(to right, rgba(39, 21, 0, 0.4), rgba(255, 255, 255, 0.4)), url(${data.previewPicture})`}} onClick={() => accessStory(data.id)}>
                            {/* Content */}
                            <div className="flex-[0.85] flex flex-col opacity-80 text-white">
                                {/* Favourite - Collection */}
                                <div className="flex gap-4 mb-8 xl:mb-24 xl:text-4xl">
                                    <button onClick={(e) => {e.stopPropagation();}}>LOVE</button>
                                    <p>RM{data.physicalPrice}</p>
                                </div>

                                <h1 className="font-serif text-4xl xl:text-8xl">{data.artworkName}</h1>
                                <div className="w-fit my-6 xl:my-10 grid grid-cols-2 grid-rows-2">
                                    <p className="font-semibold text-sm xl:text-2xl">Painted by</p>
                                    <p className="font-semibold text-sm ml-6 xl:text-2xl xl:ml-24">Medium</p>

                                    <h6 className="xl:text-3xl font-light">{data.artist}</h6>
                                    <h6 className="xl:text-3xl font-light ml-6 xl:ml-24">{data.medium}</h6>
                                </div>

                                <p className="text-lg xl:text-3xl xl:leading-10 font-light xl:font-extralight xl:w-[46ch]">{data.aboutPainting.split("@")[0]}...</p>

                                <p className="mt-4 xl:mt-20 font-bold text-xl xl:text-4xl">{data.productionYear}</p>
                            </div>

                            <section className="flex-1 flex justify-center items-center">
                                <div className="flex justify-center items-center aspect-square m-4 border border-white">
                                    <img className="p-8 xl:p-16 w-[90%] bg-white aspect-square object-cover" src={`${data.previewPicture}`}/>
                                </div>
                            </section>
                        </article>
                    </section>
                )}

                {visibleCount < artwork.length && (
                    <button className="w-fit mx-auto text-3xl font-light underline" 
                        onClick={loadMore}
                    >
                        Load more
                    </button>
                )}
            </main>

            <FooterBar />
        </>
    )
}

export default ArtCollection_Page;