import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { ExhibitionStorage } from "../Data/ExhibitionStorage";
import FooterBar from "../components/FooterBar";

const Exhibition_Page = () => {
    const [ expoData, setExpoData ] = useState(null);
    const [ isloading, setIsloading] = useState(true);

    let navigate = useNavigate();
    let { Id } = useParams();

    const ExtractParagraph = (string) => {
        return string.split("@");
    }

    useEffect(() => {
        const validExpo = ExhibitionStorage.find(expo => expo.id === Id);
        if (validExpo){
            setExpoData(validExpo);
        }
    }, [Id])

    useEffect(() => {
        if (expoData === null){
            setIsloading(true);
        } else {
            setIsloading(false);
        }
            
        return () => { setIsloading(true) }
    }, [expoData])
    
    return (
        < >
            <main>
                {!isloading && (< >
                    <section className="flex flex-col gap-8 px-20 pt-32 pb-8">
                        {/* Remember to use <------ logo */}
                        <button className="w-fit text-yellow-600 text-2xl" onClick={() => {navigate(`/GalerieWebsite/Category/${0}`)}}>Return Button</button>
                        {/* Properly 1250w/700h ratio */}
                        <img className="bg-indigo-300 h-[40rem] w-full object-cover" src={expoData.previewImage}/>
                        <article className="flex flex-col gap-8">
                            {/* Title */}
                            <h1 className="font-serif text-8xl">{expoData.eventName}</h1>

                            <section className="flex flex-col gap-4 text-gray-600 text-3xl font-semibold">
                                {/* Date */}
                                <p>Date: {expoData.startDate} - {expoData.endDate}</p> 
                                {/* Price */}
                                <p>Ticker Price: RM{expoData.price}</p>
                            </section>

                            {/* Description - maybe a div to seperate through flex */}
                            <section className="flex flex-col gap-8 text-2xl font-light">
                                {ExtractParagraph(expoData.description).map((para, index) =>
                                    <p key={index}>{para}</p>
                                )}
                            </section>
                        </article>

                        <hr className="my-10 border-black"/>

                        <article className="flex flex-col gap-8">
                            <h1 className="font-serif text-8xl">INFORMATION</h1>

                            <section className="flex flex-col gap-8 text-2xl font-light">
                                {ExtractParagraph(expoData.information).map((para, index) =>
                                    <p key={index}>{para}</p>
                                )}
                            </section>

                            {/* Image - Use Grid, 1st column is vertical */}
                            <div className="w-full h-[42rem] grid grid-rows-2 grid-cols-2 gap-8">
                                <img className="row-span-2 h-full w-full bg-red-500" src={`/GalerieWebsite/assets/Files/E02.png`}/>
                                <img className=" h-full w-full bg-slate-400" src={`/GalerieWebsite/assets/Files/E03.png`}/>
                                <img className=" h-full w-full bg-slate-600" src={`/GalerieWebsite/assets/Files/E04.png`}/>
                            </div>
                        </article>
                    </section>

                    <img className="my-8 w-full h-[26rem]" src={`/GalerieWebsite/assets/Files/E05.png`}/>

                    {/* More Exhibition */}
                    {/* <section className="flex flex-col gap-8 px-20 pt-8 pb-16">
                        <section className="flex flex-col gap-10">
                            <h3 className="font-serif text-4xl font-semibold">More Exhibitions You May Like</h3>
                            
                            <button className="w-full h-[20rem] bg-emerald-950 text-white p-8 flex flex-col justify-end items-start gap-1">
                                <h6 className="font-serif text-lg">THE RIVER SEVERN AT SHREWSBURY EXHIBITION</h6>
                                
                                <p className="underline font-light">View more</p>
                            </button>

                            <button className="w-full h-[20rem] bg-emerald-950 text-white p-8 flex flex-col justify-end items-start gap-1">
                                <h6 className="font-serif text-lg">THE RIVER SEVERN AT SHREWSBURY EXHIBITION</h6>
                                
                                <p className="underline font-light">View more</p>
                            </button>
                        </section>
                    </section> */}
                </>)}
            </main>

            <FooterBar />
        </>
    );
}

export default Exhibition_Page;