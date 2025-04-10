import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ArtworkStorage } from "../Data/ArtworkStorage";

const ArtworkAR_Page = () => {
    const [aspectWidth, setAspectWidth] = useState(0);
    const [aspectHeight, setAspectHeight] = useState(0);
    const [ artwork, setArtwork ] = useState(null);
    const [ isloading, setIsloading] = useState(true);

    let navigate = useNavigate();
    let { Id } = useParams();

    const accessStory = () => {
        navigate(`/GalerieWebsite/Story/${Id}`);
    }

    useEffect(() => {
        const findArtwork = ArtworkStorage.find(art => art.id === Id);
        if (findArtwork){
            setArtwork(findArtwork);
            const img = new Image();
            img.src = findArtwork.previewPicture;
            img.onload = () => {
                const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
                const divisor = gcd(img.width, img.height);

                setAspectWidth(img.width / divisor);
                setAspectHeight(img.height / divisor);
            }
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
        <main className="flex justify-center items-center gap-10 px-20 xl:px-[32rem] pt-32 pb-16 min-h-svh text-white bg-black">
            { !isloading &&
                <div className="relative w-full py-12 px-8 rounded-2xl bg-contain bg-no-repeat bg-[center_top] flex flex-col gap-4" style={{backgroundImage: `url(${artwork.previewPicture})`, aspectRatio: `${aspectWidth}/${aspectHeight}`}}>
                    <header className=" flex flex-col gap-1">
                        <h1 className="mb-4 font-cinzel text-6xl">VASE OF FLOWERS</h1>
                        <strong className="font-heebo font-semibold text-2xl">Instruction</strong>
                        <p className="font-heebo font-light text-xl">Please click on the circle button</p>
                    </header>

                    <button className="mt-auto ml-auto font-heebo font-extralight text-2xl underline" onClick={accessStory}>Read the story</button>

                    {/* Block Location */}
                    <button className="absolute top-1/3 left-[15%] w-[4rem] h-[4rem] rounded-[50%] border border-white p-4 flex hover:opacity-60">
                        <span className="bg-white w-full h-full rounded-full" />
                    </button>

                    <button className="absolute bottom-1/4 right-1/4 w-[4rem] h-[4rem] rounded-[50%] border border-white p-4 flex hover:opacity-90 ">
                        <span className="bg-white  w-full h-full rounded-full" />
                    </button>
                </div>
            }

            {/* Module */}
            {false && (
                <section>
                    <p>De Heem frequently incorporated particular animals and flowers because of their underlying symbolic connotations</p>
                </section>
            )}
        </main>
    )
}

export default ArtworkAR_Page;