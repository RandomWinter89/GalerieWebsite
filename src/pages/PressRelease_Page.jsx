import { FaTwitter, FaFacebook  } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { PressRelease_Storage } from "../Data/PressReleaseStorage";
import { UsersData } from "../Data/Users";
import FooterBar from "../components/FooterBar";

const PressRelease_Page = () => {
    const [ prData, setPRData ] = useState(null);
    const [ author, setAuthor ] = useState(null);
    const [ isloading, setIsloading] = useState(true);
    let navigate = useNavigate();

    let { Id } = useParams();

    useEffect(() => {
        const validPR = PressRelease_Storage.find(pr => pr.id === Id);
        if (validPR) {
            setPRData(validPR);
            setAuthor(UsersData.find(user => user.id === validPR.userId));
        }
    }, [Id])

    useEffect(() => {
        setIsloading(prData === null);
        return () => { setIsloading(true) }
    }, [prData])

    const ExtractParagraph = (string) => {
        return string.split("@");
    }

    return (
        < >
            <main className="flex flex-col gap-10 px-20 py-32 bg-[#FFFDF9]">
                {!isloading && <>
                    <button className="w-fit text-yellow-600 text-2xl" onClick={() => {navigate(`/GalerieWebsite/Category/${1}`)}}>Return Button</button>

                    <section className="flex flex-col gap-3">
                        <h1 className="text-5xl font-serif font-semibold">{prData.previewTitle}</h1>
                        <p className="text-lg font-light">Posted {prData.uploadDate} {prData.uploadTime}</p>
                        <nav className="flex gap-2 text-2xl">
                            <FaTwitter />
                            <FaFacebook />
                            <BiLogoInstagramAlt />
                        </nav>
                    </section>

                    <img className="w-full h-[24rem] xl:h-[48rem]" src={`${prData.previewPicture}`}/>

                    <div className="flex gap-6">
                        <aside className="flex-shrink-[0.65] flex flex-col gap-12">
                            <header className="flex flex-col gap-7 pr-6 border-r border-black">
                                <div className="flex gap-3">
                                    <img className="w-[4rem] aspect-square rounded-full object-cover" src={author.profile}/>

                                    <div className="flex flex-col">
                                        <p className="font-light text-xl">{author.position}:</p>
                                        <p className="font-medium text-2xl">{author.name}</p>
                                    </div>
                                </div>

                                <section className="flex flex-col gap-4">
                                    <h6 className="font-medium text-2xl text-gray-900">TAGS:</h6>
                                    <div className="flex flex-wrap gap-2">
                                        {prData.tags.map((tag, index) => <span key={index} className="px-6 py-1 border border-black rounded-full">{tag}</span>)}
                                    </div>
                                </section>
                            </header>

                            <section className="h-full flex flex-col gap-5 pr-6 border-r border-black">
                                <h4 className="text-3xl font-serif">RELATED NEWS</h4>

                                <button className="flex flex-col gap-2">
                                    <img className="w-full h-[9rem]" src={"/GalerieWebsite/assets/Files/PR03.png"}/>
                                    <div className="my-2 flex flex-wrap">
                                        <span className="px-6 py-1 border border-black rounded-full">Interview</span>
                                    </div>
                                    <h5 className="text-2xl font-serif text-start">Where I Find My Inspiration?</h5>
                                    <p className="font-light text-start">Oct 11, 2022</p>
                                </button>

                                <button className="flex flex-col gap-2">
                                    <img className="w-full h-[9rem]" src={"/GalerieWebsite/assets/Files/PR04.png"}/>
                                    <div className="my-2 flex flex-wrap">
                                        <span className="px-6 py-1 border border-black rounded-full">Interview</span>
                                    </div>
                                    <h5 className="text-2xl font-serif text-start">Where I Find My Inspiration?</h5>
                                    <p className="font-light text-start">Oct 11, 2022</p>
                                </button>
                            </section>
                        </aside>

                        <section className="flex-[4] xl:flex-[24]">
                            <h1 className="w-[24ch] xl:w-full xl:text-5xl mb-6 text-4xl font-serif">{prData.contentTitle}</h1>

                            <section className="flex flex-col gap-6 text-xl font-light">
                                {ExtractParagraph(prData.contentInfo).map((para, index) => <p key={index}>{para}</p>)}
                            </section>

                            <img className=" my-6 w-full xl:h-[20rem] h-[10rem] border border-black rounded-3xl" src={`${prData.contentPicture}`}/>
                        </section>
                    </div>
                </>}
            </main>

            <FooterBar/>
        </>
    )
}

export default PressRelease_Page;