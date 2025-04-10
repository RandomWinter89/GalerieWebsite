
const Tags = ({props}) => {
    return (
        <section className="flex flex-wrap gap-2 font-bold text-2xl max-lg:text-xs">
            {props.map((tag, index) =>
                <span key={index} className="w-fit rounded-full px-6 py-2 bg-black text-white max-lg:px-4 max-lg:py-1">
                    {tag}
                </span>
            )}
        </section>
    )
}

export default Tags;