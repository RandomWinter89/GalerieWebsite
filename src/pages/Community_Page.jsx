import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { CommunityStorage } from "../Data/CommunityStorage";
import FooterBar from "../components/FooterBar";

const Community_Page = () => {
    const [ commData, setCommData ] = useState(null);
    const [ isloading, setIsloading] = useState(true);
    let navigate = useNavigate();

    let { Id } = useParams();

    useEffect(() => {
        const validComm = CommunityStorage.find(comm => comm.id === Id);
        if (validComm) {
            setCommData(validComm);
        }
    }, [Id])

    useEffect(() => {
        setIsloading(commData === null);
        return () => { setIsloading(true) }
    }, [commData])

    const ExtractParagraph = (string) => {
        return string.split("@");
    }

    return (
        < >
            <main className="flex flex-col gap-10 px-20 py-32 bg-[#FFFDF9]">
                {!isloading && (< >
                    <button className="w-fit text-yellow-600 text-2xl" onClick={() => {navigate(`/Category/${2}`)}}>Return Button</button>

                    <img className="w-full h-[24rem] border border-black rounded-3xl xl:h-[48rem] object-cover" src={commData.previewImage}/>

                    <section className="flex flex-col gap-6 font-light">
                        <h1 className="font-cinzel font-medium text-5xl">{commData.category}: {commData.title}</h1>
                        <hr className="border-2 border-[#C5BBA7]"/>
                        <div className="flex flex-col gap-6 my-4 font-heebo font-light text-lg">
                            {ExtractParagraph(commData.contentInfo).map((para, index) => 
                                <p key={index}>{para}</p>
                            )}
                        </div>
                    </section>

                    <section className="flex flex-col gap-6">
                        <h1 className="font-serif font-medium text-5xl">PODCASTS</h1>
                        <hr className="border-[#C5BBA7] border-2"/>

                        {/* Insert Audio Data */}
                        <div className="flex items-center gap-6">
                            <button className="flex-[0.85] xl:flex-[0.5] h-[5rem] xl:h-[8rem] text-3xl font-bold bg-slate-600 text-white rounded-full">START</button>
                            <main className="flex-1 flex flex-col">
                                <h1 className="text-3xl font-serif font-light text-[#1D1D1D]">MEANING</h1>

                                <div className="mt-4 w-full h-1 bg-[#EBE7DF] rounded-full overflow-hidden">
                                    <div className="bg-[#C5BBA7] h-full w-[20%]"/>
                                </div>

                                <div className="flex justify-between text-[#C5BBA7]">
                                    <p>2:48</p>
                                    <p>4:50</p>
                                </div>
                            </main>
                            {/* EMPTY */}
                            <div className="flex-[0.5]"/>
                        </div>

                        <div className="flex items-center gap-6">
                            <button className="flex-[0.85] xl:flex-[0.5] h-[5rem] xl:h-[8rem] text-3xl font-bold bg-slate-600 text-white rounded-full">START</button>
                            <main className="flex-1 flex flex-col">
                                <h1 className="text-3xl font-serif font-light text-[#1D1D1D]">MEANING</h1>

                                {/* <div className="mt-4 w-full h-1 bg-[#EBE7DF] rounded-full overflow-hidden">
                                    <div className="bg-[#C5BBA7] h-full w-[20%]"/>
                                </div> */}

                                <div className="flex justify-between text-[#C5BBA7]">
                                    <p>2:48</p>
                                    {/* <p>4:50</p> */}
                                </div>
                            </main>
                            {/* EMPTY */}
                            <div className="flex-[0.5]"/>
                        </div>
                    </section>

                    {/* Comment Section */}
                    <section className="flex flex-col gap-6">
                        <header className="flex items-end">
                            <h1 className="font-serif font-medium text-5xl">WALL OF FEEDBACKS</h1>
                            <p className="ml-auto text-lg font-light">1099 comments</p>
                        </header>
                        <hr className="border-[#C5BBA7] border-2"/>

                        {/* Content */}
                        <div className="flex gap-4 text-xl">
                            <input type="text" placeholder="Leave a comment" className="flex-grow-[4] flex-shrink py-4 px-6 rounded-full bg-[#EBE7DF]"/>
                            <button className="flex-1 bg-black text-white py-4 px-6 rounded-full font-semibold">Comment</button>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {commData.feedbacks.map((fedback, index) => {
                                if (index % 2 == 1) {
                                    return (
                                        <article key={index} className="p-4 border border-black rounded-[2rem]">
                                            <h1 className="text-2xl font-semibold my-8">#{index + 1}</h1>
                                            <div className="flex flex-col gap-2 text-lg font-light mb-8">
                                                <p>{fedback.userComment}</p>
                                            </div>
                                        </article>
                                    )
                                }

                                return (
                                    <article key={index} className="p-4 col-span-2 border border-black rounded-[2rem]">
                                        <h1 className="text-2xl font-semibold my-8">#{index + 1}</h1>
                                        <div className="flex flex-col gap-2 text-lg font-light mb-8">
                                            <p>{fedback.userComment}</p>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </section>
                </>)}
            </main>

            <FooterBar />
        </>
    )
}

export default Community_Page;