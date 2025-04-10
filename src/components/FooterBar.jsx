import { useNavigate } from "react-router-dom";

const FooterBar = () => {
    const navigate = useNavigate();

    return (
        <footer className="flex bg-black">
            <section className="mx-auto flex items-center gap-16 px-20 py-12 text-white max-lg:flex-col max-lg:items-start max-lg:w-full max-lg:gap-4 max-sm:mx-0">
                <div className="flex flex-col gap-2">
                    {/* Remember to swap image for h1 */}
                    <h1 className="font-serif text-4xl text-orange-400 max-xl:text-2xl">GALERIE</h1>
                    <p className="max-w-[30ch] text-xl max-xl:text-base max-lg:max-w-fit">“An art gallery collaorated with more than 100 artists in Malaysia.”</p>
                </div>

                <section className="flex flex-col gap-8 max-sm:gap-4">
                    <article className="flex flex-col gap-4 max-xl:gap-2 max-sm:gap-1">
                        <h5 className="text-2xl font-extralight max-xl:text-lg max-lg:text-base max-sm:text-sm">Opening Hours</h5>
                        <div className="max-sm:text-sm">
                            <p><strong>Monday to Friday</strong>: 10 a.m. to 6 p.m.</p>
                            <p><strong>Saturday to Sunday</strong>: 10 a.m. to 9 p.m.</p>
                        </div>
                    </article>

                    <article className="flex flex-col gap-4 max-xl:gap-2 max-sm:gap-1">
                        <h5 className="text-2xl font-extralight max-xl:text-lg max-lg:text-base max-sm:text-sm">Contacts</h5>
                        <div className="w-[36ch] max-sm:w-full max-sm:text-sm">
                            <p><strong>Location</strong>: Galeria Art Gallery, Cyberjaya, 62250, Kuala Lumpur</p>
                            <p><strong>Phone</strong>: 03-9909990</p>
                            <p><strong>Email</strong>: info.galeria@email.com</p>
                        </div>
                    </article>
                </section>

                <nav className="flex justify-between gap-12 text-lg max-xl:text-base max-sm:gap-4 max-sm:text-sm">
                    <section className="flex flex-col gap-5 max-xl:gap-3 max-sm:gap-2">
                        <button className="text-left" onClick={() => navigate("/GalerieWebsite")}>HOME</button>
                        <button className="text-left" onClick={() => navigate(`/GalerieWebsite/Category/${0}`)}>EXHIBITION</button>
                        <button className="text-left" onClick={() => navigate("/GalerieWebsite/Collection")}>COLLECTION</button>
                        <button className="text-left" onClick={() => navigate("/GalerieWebsite/Proposal")}>PROPOSE YOUR WORK</button>
                    </section>

                    <section className="flex flex-col gap-5 max-xl:gap-3 max-sm:gap-2">
                        <button className="text-left" onClick={() => navigate("/GalerieWebsite/Cart")}>CART</button>
                        <button className="text-left" onClick={() => navigate(`/GalerieWebsite/Category/${3}`)}>BLOG</button>
                        <button className="text-left" onClick={() => navigate(`/GalerieWebsite/Category/${1}`)}>PRESS RELEASE</button>
                        <button className="text-left" onClick={() => navigate(`/GalerieWebsite/Category/${2}`)}>OUR COMMUNITY</button>
                    </section>
                </nav>
            </section>
        </footer>
    );
}

export default FooterBar;