import Tags from "./Tags";

const EventArticle = ({eventData, handleOpen}) => {
    return (
        < >
            <article className="flex gap-8 items-center max-lg:flex-col max-lg:gap-4">
                {/* Thumbnail */}
                <img 
                    className="w-[24rem] aspect-[3/4] object-cover max-lg:w-full max-lg:aspect-auto" 
                    src={eventData.previewImage}
                />
                {/* Information */}
                <section className="flex-1 flex flex-col gap-8 max-lg:gap-4 max-sm:gap-2">
                    {/* Event Name */}
                    <h1 className="font-bold text-6xl max-xl:text-4xl max-sm:text-xl">
                        {eventData.location}<br/>{eventData.eventName}
                    </h1>

                    {/* Date */}
                    <p className="text-gray-600 font-semibold text-2xl max-lg:text-lg max-sm:text-sm">
                        {eventData.startDate} ~ {eventData.endDate}
                    </p>

                    {/* Tagline */}
                    <Tags props={eventData.tags}/>

                    {/* Description */}
                    <p className="font-light text-2xl max-lg:text-lg max-sm:text-base">
                        {eventData.description.split("@")[0]}...
                    </p>

                    {/* Button */}
                    <button
                        className="w-fit text-gray-800 font-semibold underline capitalize text-2xl max-lg:text-lg"
                        onClick={handleOpen}
                    >
                        more info
                    </button>
                </section>
            </article>
        </>
    )
}

export default EventArticle;