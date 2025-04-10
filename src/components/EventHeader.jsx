import { useNavigate } from "react-router-dom";

const EventHeader = ({header, desc, ctaLink}) => {
    const navigate = useNavigate();

    return (
        <header className="flex flex-col gap-2">
            <section className="flex justify-between gap-4 pb-4 border-b border-black">
                <h1 className="flex-1 font-serif uppercase text-5xl max-lg:text-3xl max-sm:text-base">
                    {header}
                </h1>
                <button className="w-fit font-light text-2xl max-lg:text-lg max-sm:text-sm hover:underline" onClick={() => navigate(ctaLink)}>
                    View for more
                </button>
            </section>
            {desc.trim().length != 0 && 
                <p className="w-[46ch] font-light text-xl max-lg:text-base max-sm:text-xs">
                    {desc}
                </p>
            }
        </header>
    )
}

export default EventHeader;