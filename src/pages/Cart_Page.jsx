import { UsersData } from "../Data/Users"
import { ArtworkStorage } from "../Data/ArtworkStorage";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Cart_Page = () => {
    const [ carts, setCarts] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchCarts = async () => {
            if (!Array.isArray(UsersData[0].carts) || UsersData[0].carts.length === 0) {
                console.warn("No Carts found.");
                return;
            }

            const cartArtwork = ArtworkStorage.filter(artwork =>
                UsersData[0].carts.includes(artwork.id)
            );

            setCarts(cartArtwork);
        };

        fetchCarts();
    }, [])

    return (
        <main className="flex flex-col gap-10 px-20 py-32 bg-[#FFFDF9]">
            <header className="flex justify-between border-y border-black py-6">
                <button className="w-fit text-yellow-600 text-2xl" onClick={() => navigate(-1)}>Return Button</button>
                <h1 className="text-yellow-600 font-serif text-4xl">SHOPPING CART</h1>
            </header>

            <div className="flex flex-col gap-6 my-4">
                <header className="flex justify-between gap-24 text-3xl xl:text-4xl font-light">
                    <p className="flex-1">Product</p>
                    <p className="flex-[0.45] xl:flex-[0.3]">Price</p>
                </header>

                <div className="flex flex-col gap-4">
                    {carts && <>
                        {carts.map((artwork, index) => (
                            <section key={index} className="flex justify-between gap-24">
                                <div className="flex-1 flex gap-4">
                                    <img className="w-32 xl:w-52 h-48 xl:h-64 object-cover" src={`${artwork.previewPicture}`} />
                                    <p className="flex-1 text-xl xl:text-3xl font-light text-yellow-600">{artwork.artworkName}, {artwork.dimension}, {artwork.medium}</p>
                                </div>
        
                                <div className="flex-[0.45] xl:flex-[0.3] flex text-xl justify-between">
                                    <p>RM{artwork.physicalPrice}.00</p>
                                    {/* <button className="w-fit h-fit">X</button> */}
                                </div>
                            </section>
                        ))} 
                    </>}
                </div>
            </div>

            

            <h2 className="border-y border-black py-6 px-4 text-2xl text-yellow-600 font-serif">CART TOTALS</h2>

            <div className="py-6 px-4 grid grid-cols-2 xl:grid-cols-3 gap-4 items-center text-lg xl:text-2xl">
                <p className="xl:col-span-2 mb-6 font-semibold">SUBTOTAL</p>
                <p className="mb-6">RM1000.00</p>

                <p className="xl:col-span-2 mb-6 font-semibold">SHIPPING</p>
                <p className="mb-6">FREE SHIPPING</p>

                {/* <p className="xl:col-span-2 font-semibold">COUPON CODE</p>
                <div className="relative">
                    <input type="text" placeholder="Enter Coupon Code" className="w-full pl-2 pr-20 py-3 border border-black"/>
                    <button className="absolute right-4 h-full text-lg">APPLY</button>
                </div> */}
            </div>

            <div className="border-t border-black py-12 px-4 grid grid-cols-2 xl:grid-cols-3  gap-4 items-center justify-between text-lg xl:text-2xl">
                <p className="font-semibold xl:col-span-2">TOTAL</p>
                <strong className="font-semibold text-2xl xl:text-4xl text-yellow-600">RM1000.00</strong>
            </div>

            <button className="mx-auto border px-12 py-6 rounded-3xl text-xl font-medium border-black" onClick={() => navigate("/GalerieWebsite/Checkout")}>Proceed to checkout</button>
        </main>
    )
}

export default Cart_Page;