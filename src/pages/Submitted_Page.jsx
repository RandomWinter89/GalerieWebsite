import { useNavigate } from "react-router-dom";

const Submitted_Page = () => {
    const navigate = useNavigate();

    return (
        <main className="bg-black h-svh w-full flex flex-col justify-center items-center text-white">
            <h1 className="mb-4 font-cinzel text-6xl">YOUR ORDER IS DONE!</h1>
            <h1 className="font-cinzel text-6xl">PLEASE CHECK YOUR EMAIL</h1>
            <button className="w-fit py-4 px-16 mt-8 border border-white rounded-xl font-heebo text-2xl" onClick={() => navigate("/")} >Continue Viewing</button>
        </main>
    )
}

export default Submitted_Page;