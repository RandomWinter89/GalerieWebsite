import { FaTwitter, FaFacebook  } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { useNavigate, useParams  } from "react-router-dom";
import { useState, useEffect } from "react";

import { BlogStorage } from "../Data/BlogsStorage";
import FooterBar from "../components/FooterBar";

const Blog_Page = () => {
    let navigate = useNavigate();

    const [ blogData, setBlogData ] = useState(null);
    const [ isloading, setIsloading] = useState(true);

    let { Id } = useParams();

    useEffect(() => {
        const validBlog = BlogStorage.find(blog => blog.id === Id);
        if (validBlog) {
            setBlogData(validBlog);
        }
    }, [Id])

    useEffect(() => {
        setIsloading(blogData === null);
        return () => { setIsloading(true) }
    }, [blogData])

    const ExtractParagraph = (string) => {
        return string.split("@");
    }

    return (
        < >
        {!isloading && (
            <> 
                <main className="flex flex-col gap-8 px-20 pt-32 pb-8 bg-[#FFFDF9]">
                    <button className="w-fit text-yellow-600 text-2xl" onClick={() => {navigate(`/GalerieWebsite/Category/${3}`)}}>Return Button</button>
                    <h1 className="text-center my-6 text-6xl font-serif">{blogData.title}</h1>
                </main>
                
                <img className="w-full h-[24rem] bg-emerald-200 border-none"/>

                <main className="flex flex-col gap-8 px-20 py-16 mb-16 bg-[#FFFDF9]">
                    <header className="flex justify-between items-center">
                        <div className="flex gap-3">
                            <img className="w-[4rem] aspect-square rounded-full bg-red-600"/>

                            <div className="flex flex-col">
                                <p className="font-light text-xl">Author:</p>
                                <p className="font-medium text-2xl">Maria Ching</p>
                            </div>
                        </div>

                        <nav className="flex gap-2 text-2xl">
                            <FaTwitter />
                            <FaFacebook />
                            <BiLogoInstagramAlt />
                        </nav>
                    </header>

                    <article>
                        <h1 className="uppercase text-3xl xl:text-4xl font-serif mb-6">
                            {blogData.header}
                        </h1>
                        <div className="flex flex-col gap-6 text-xl font-light">
                            {ExtractParagraph(blogData.information).map((para, index) => 
                                <p key={index}>{para}</p>
                            )}
                        </div>
                    </article>
                    
                    {blogData.content.map((content, index) => {
                        if (index % 2) {
                            return (
                                <article className="flex gap-8">
                                    <aside className="flex-[1] xl:h-[20rem]">
                                        <img className="rounded-t-full w-full h-full border border-black"/>
                                        <p className="font-thin text-sm">{blogData.content.imageDescription}</p>
                                    </aside>

                                    <div className="flex-[2] xl:flex-[6]">
                                        <img className="w-full h-[6rem] mb-6 bg-orange-600"/>
                                        <div className="flex flex-col gap-6 text-xl font-light">
                                            {ExtractParagraph(content.information).map((para, index) => <p key={index}>{para}</p>)}
                                        </div>
                                    </div>
                                </article>
                            )
                        }

                        return (
                            <article className="flex gap-8">
                                <div className="flex-[2] xl:flex-[6]">
                                    <img className="w-full h-[6rem] mb-6 bg-orange-600"/>
                                    <div className="flex flex-col gap-6 text-xl font-light">
                                        {ExtractParagraph(content.information).map((para, index) => <p key={index}>{para}</p>)}
                                    </div>
                                </div>

                                <aside className="flex-[1] xl:h-[20rem]">
                                    <img className="rounded-t-full w-full h-full border border-black"/>
                                    <p className="font-thin text-sm">{blogData.content.imageDescription}</p>
                                </aside>
                            </article>
                        )
                    })}
                    
                </main>
            </>)}

            <FooterBar />
        </>
    )
}

export default Blog_Page;