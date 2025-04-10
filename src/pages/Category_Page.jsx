import { SlMagnifier } from "react-icons/sl";
import { BsPeopleFill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";

import { useNavigate, useParams  } from "react-router-dom";

import { motion } from "framer-motion";
import { useState } from "react";

import EventArticle from "../components/EventArticle";

const tabs = ["EXHIBITIONS", "PRESS RELEASE", "COMMUNITY", "BLOG"];

import { ExhibitionStorage } from "../Data/ExhibitionStorage";
// Left Expand and Tag
const Exhibition = () => {
    const [ events ] = useState(ExhibitionStorage);
    let navigate = useNavigate();

    return (
        < >
            {/* <div className="flex flex-col gap-8">
                <button className="text-yellow-600 w-fit font-bold text-4xl">Filter by +</button>

                <section className="flex gap-4 text-2xl">
                    <button className="px-4 py-1 bg-black text-white font-bold rounded-full">Painting X</button>
                    <button className="px-4 py-1 bg-black text-white font-bold rounded-full">Kuala Lumpur X</button>
                    <button className="px-4 py-1 bg-black text-white font-bold rounded-full">RM10 Below X</button>
                </section>
            </div> */}

            <section className="flex flex-col gap-12 my-8">
                {events.map((data, index) => 
                    // <Article key={index} info={data} handleData={() => handleReleasePage(data.id)}/>
                    <EventArticle 
                        eventData={data} 
                        handleOpen={() => navigate(`/GalerieWebsite/Exhibition/${data.id}`)}
                    />
                )}
            </section>
            {/* <button className="underline text-3xl font-bold text-gray-900">LOAD MORE</button> */}
        </>
    )
}

// Slider and Feature
import { PressRelease_Storage } from "../Data/PressReleaseStorage";
const PressRelease = () => {
    const [ pressRelease ] = useState(PressRelease_Storage);
    let navigate = useNavigate();

    const handleReleasePage = (id) => {
        navigate(`/GalerieWebsite/PressRelease/${id}`);
    }

    return (
        <>
            {/* Slide Show - later*/}
            {/* <div className="w-full h-[32rem] xl:h-[42rem] relative">
                <div className="w-full h-full absolute">
                    <img className="w-full h-full bg-black"/>
                </div>

                <p className="absolute top-6 -left-4 xl:-left-12 bg-[#CC9638] text-white font-light  px-10 py-1 xl:text-2xl xl:px-20 xl:py-2">New</p>
                
                <section className="absolute bottom-0 gap-2 px-8 xl:px-16 mb-6 flex flex-col w-full text-white">
                    
                    <div className="text-sm xl:text-base flex flex-wrap gap-4">
                        <span className="border border-white rounded-full py-1 xl:py-2 px-6 xl:px-10">Interview</span>
                        <span className="border border-white rounded-full py-1 xl:py-2 px-6 xl:px-10">Art & Culture</span>
                    </div>
                    <h1 className="mt-3 text-3xl xl:text-5xl font-serif">Fauzi: Where I Start</h1>
                    <p className="text-sm xl:text-lg font-light">Nov 6, 2022</p>

                    <nav className="justify-center mt-6 xl:mt-12 flex gap-2">
                        <button className="w-[0.5rem] xl:w-[0.7rem] h-[0.5rem] xl:h-[0.7rem] bg-white rounded-[50%]"/>
                        <button className="w-[0.5rem] xl:w-[0.7rem] h-[0.5rem] xl:h-[0.7rem] bg-gray-300 rounded-[50%]"/>
                        <button className="w-[0.5rem] xl:w-[0.7rem] h-[0.5rem] xl:h-[0.7rem] bg-gray-300 rounded-[50%]"/>
                    </nav>
                </section>
            </div> */}

            {/* Features & Articles */}
            <div className="flex flex-col gap-8 mb-8">
                <header className="flex justify-between items-end pb-4 border-b border-black">
                    <h1 className="uppercase font-serif text-4xl">FEATURES</h1>
                    {/* <h3 className="capitalize font-light text-xl">view for more</h3> */}
                </header>

                <div className="flex max-sm:flex-col max-sm:gap-4">
                    <article 
                        className="h-[42rem] flex-[8] flex flex-col gap-6 justify-end items-start px-16 py-12 bg-red-400 cursor-pointer
                        max-sm:flex-auto max-sm:h-[26rem] max-lg:gap-4 max-sm:gap-2 max-sm:px-8 max-sm:py-6"
                        style={{ backgroundImage: `${pressRelease[0].previewImage}`}} 
                        onClick={() => {handleReleasePage(pressRelease[0].id)}}
                    >
                        <div className="flex flex-wrap gap-3 text-white text-lg max-lg:text-base max-sm:text-xs max-sm:gap-2">
                            {pressRelease[0].tags.map((tag, index) => 
                                <span key={index} className="border-white border rounded-full px-10 py-2 max-lg:px-8 max-sm:px-4 max-sm:py-1">
                                    {tag}
                                </span>
                            )}
                        </div>

                        <h1 className="uppercase font-serif text-white text-6xl max-lg:text-4xl max-sm:text-xl">
                            {pressRelease[0].previewTitle}
                        </h1>

                        <p className="font-light text-white text-2xl max-lg:text-xl max-sm:text-base">
                            {pressRelease[0].uploadDate}
                        </p>
                    </article>

                    {/* <span className="border-r border-b border-black xl:mx-8 xl:my-0 sm:my-8 sm:mx-0"/> */}

                    {/* <div className="flex-[5] flex flex-col gap-6">
                        {pressRelease.map((data, index) => {
                            if (index === 0) return (< ></>);
                            return (
                                <section className="flex h-[12rem] items-center gap-4 cursor-pointer" onClick={() => {handleReleasePage(data.id)}}>
                                    <img 
                                        className="flex-[1.5] h-full w-full object-cover bg-emerald-300" 
                                        src={`${data.previewPicture}`}
                                    />

                                    <article className="flex-1 flex flex-col gap-3">
                                        <div className="flex gap-3 text-white text-lg max-sm:text-x">
                                            {data.tags.map((tag, index) => 
                                                <span key={index} className="w-fit border rounded-full border-black py-[0.85] px-4">
                                                    {tag}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <h1 className="text-2xl font-serif">{data.previewTitle}</h1>
                                        <p className="font-light text-sm">{data.uploadDate}</p>
                                    </article>
                                </section>
                            )
                        })}
                    </div> */}
                </div>
            </div>

            {/* Latest Features */}
            <div className="flex flex-col">
                <h1 className="uppercase pb-4 text-4xl font-serif border-b border-black">Last Articles</h1>

                {pressRelease.map((data, index) => 
                    <section key={index} className="flex items-center sm:gap-6 xl:gap-10 py-4 border-b">
                        <section className="flex max-lg:flex-col max-lg:gap-2">
                            <section className="flex flex-col">
                                <h1 className="uppercase text-2xl font-serif max-sm:text-base">{data.previewTitle}</h1>
                                <p className="font-light text-sm max-sm:text-xs">{data.uploadDate}</p>
                            </section>

                            <div className="flex flex-wrap gap-3 text-sm text-gray-700 max-lg:gap-1 max-sm:text-xs">
                                {data.tags.map((tag, index) => 
                                    <span key={index} className="border h-fit border-gray-700 rounded-full py-1 px-6 max-sm:px-2">
                                        {tag}
                                    </span>
                                )}
                            </div>
                        </section>

                        <button className="text-lg font-light ml-auto p-1 rounded border-black max-sm:text-sm hover:border" onClick={() => {handleReleasePage(data.id);}}>
                            Read more
                        </button>
                    </section>
                )}
            </div>
        </>
    )
}

import { CommunityStorage } from "../Data/CommunityStorage";
const Community = () => {
    const [ community ] = useState(CommunityStorage);
    let navigate = useNavigate();

    const handleCommunityPage = (id) => {
        navigate(`/GalerieWebsite/Community/${id}`);
    }

    return (
        < >
            {/* <form>
                <input type="text" placeholder="Search the Room" className="px-8 py-2 text-lg w-full border-b-2 border-black"/>
            </form> */}

            <div className="flex flex-col gap-8">
                {/* Original */}
                {community.map((data, index) => 
                    <button key={index} className="flex border border-black" onClick={() => {handleCommunityPage(data.id)}}>
                        <img className="flex-1  object-cover" src={`${data.previewImage}`}/>
                        <div className="flex-[2] flex flex-col gap-4 px-12 py-10">
                            <header className="flex flex-col gap-2 uppercase text-4xl text-left font-cinzel">
                                <h1>{data.category}:</h1>
                                <h1>{data.title}</h1>
                            </header>
                            <section className="flex uppercase items-center border-y border-black w-fit py-3">
                                <span className="border-r border-black px-4">{data.location}</span>
                                <span className="border-r border-black flex items-center leading-none gap-2 px-4"><BsPeopleFill /> {data.numOfParticipant}</span>
                                {data.video.split("").length != 0 && <span className="border-r border-black flex items-center leading-none gap-2 px-4"><FaPlayCircle /> video</span>}
                                {data.audios.length != 0 && <span className="flex items-center leading-none gap-2 px-4"><IoHeadset /> audio</span>}
                            </section>
                            <p className="text-left text-lg font-light">{data.description}</p>
                        </div>
                    </button>
                )}
            </div>
        </>
    )
}

import {BlogStorage} from "../Data/BlogsStorage";
import FooterBar from "../components/FooterBar";
const Blog = () => {
    const [ blogs ] = useState(BlogStorage);
    let navigate = useNavigate();

    const handleReleasePage = (id) => {
        navigate(`/GalerieWebsite/Blog/${id}`);
    }

    return (
        < >
            {/* <div className="flex flex-col gap-8">
                <button className="text-yellow-600 w-fit font-bold text-4xl">Filter by +</button>

                <section className="flex gap-4 text-2xl">
                    <button className="px-4 py-1 bg-black text-white font-bold rounded-full">Oct 2022 X</button>
                    <button className="px-4 py-1 bg-black text-white font-bold rounded-full">All X</button>
                </section>
            </div> */}

            <div className="w-full h-full mt-6 grid grid-cols-3 gap-6 lg:grid-cols-4 xl:grid-cols-5">
                {blogs.map((data, index) => 
                    <section key={index} className="flex flex-col gap-3">
                        <img className="w-full h-[24rem] aspect-[9:16] rounded-2xl shadow-2xl mb-2" src={`${data.previewImage}`}/>
                        <p className="font-light text-lg">{data.releaseDate}</p>
                        <h5 className="uppercase font-serif text-3xl">{data.title}</h5>
                        <p className="font-light text-lg">{data.description}</p>
                        <button className="underline font-semibold mr-auto mt-2" onClick={() => {handleReleasePage(data.id)}}>Read More</button>
                    </section>
                )}
            </div>
        </>
    )
}

//========================================

const Category_Page = () => {
    const { Id } = useParams();
    const [activeTab, setActiveTab] = useState(tabs[parseInt(Id)]);

    return (
        <>
            <main className="flex flex-col gap-10 px-20 py-32 bg-[#FFFDF9]">
                <nav className="relative mx-8 flex max-md:flex-col xl:flex-row justify-around bg-gray-400 text-gray-500 font-bold max-md:text-sm xl:text-2xl rounded-3xl xl:rounded-full p-2">
                    {tabs.map((tab) => (
                        <button key={tab} className={`flex-1 p-6 relative ${activeTab === tab && "text-white"}`} onClick={() => setActiveTab(tab)} >
                            {activeTab === tab && (
                                <motion.span
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-black rounded-3xl xl:rounded-full"
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </nav>
                
                {activeTab === tabs[0] && <Exhibition />}
                {activeTab === tabs[1] && <PressRelease />}
                {activeTab === tabs[2] && <Community />}
                {activeTab === tabs[3] && <Blog />}
            </main>

            <FooterBar/>
        </>
    )
}

export default Category_Page;