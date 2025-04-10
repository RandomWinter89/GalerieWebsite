import { UsersData } from "../Data/Users";
import { ArtworkStorage } from "../Data/ArtworkStorage";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Bookmark_Page = () => {
    const [bookmarks, setBookmarks] = useState(null);

    let navigate = useNavigate();
    const onNavigate = (id) => {
        navigate(`/GalerieWebsite/Story/${id}`);
    }

    useEffect(() => {
        const fetchBookmarks = async () => {
            if (!Array.isArray(UsersData[0].bookmarks) || UsersData[0].bookmarks.length === 0) {
                console.warn("No bookmarks found.");
                return;
            }

            const bookmarkedArtworks = ArtworkStorage.filter(artwork =>
                UsersData[0].bookmarks.includes(artwork.id)
            );

            setBookmarks(bookmarkedArtworks);
        };

        fetchBookmarks();
    }, [])

    return (
        <main className="flex flex-col gap-10 px-20 py-32 bg-[#FFFDF9]">
            <header className="flex items-center gap-6">
                <h1 className="font-serif font-light text-6xl">Bookmark</h1>
                <hr className="flex-1 border-black"/>
                <p className="w-[70ch] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dapibus ligula, eu pulvinar justo. </p>
            </header>

            <section className="grid grid-cols-4 gap-8 2xl:grid-cols-8">
                <button className="w-full h-[14rem] bg-gray-400 text-white text-2xl" onClick={() => navigate("/GalerieWebsite/Collection")}>+</button>

                {bookmarks && <>
                    {bookmarks.map((artwork, index) => (
                        <section key={index} className="w-full">
                            <div className="w-full h-[18rem] flex justify-end items-start p-4 mb-3 bg-cover bg-center"  style={{backgroundImage: `url(${artwork.previewPicture})`}} onClick={() => {onNavigate(artwork.id)}}>
                                {/* <button className="text-white font-extrabold" onClick={(e) => {e.stopPropagation();}}>O</button> */}
                            </div>
                            <p className="text-lg/4 font-semibold">{artwork.artworkName}</p>
                            <p className="font-light">{artwork.artist}, {artwork.productionYear}</p>
                        </section>
                    ))} 
                </>}
            </section>
        </main>
    )   
}

export default Bookmark_Page;