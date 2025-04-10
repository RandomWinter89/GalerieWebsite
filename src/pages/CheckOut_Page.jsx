import { UsersData } from "../Data/Users"
import { ArtworkStorage } from "../Data/ArtworkStorage";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const CheckOut_Page = () => {
    const [ carts, setCarts] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchCarts = async () => {
            if (!Array.isArray(UsersData[0].carts) || UsersData[0].carts.length === 0) {
                console.warn("No Collection found.");
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
                <h1 className="text-yellow-600 font-serif text-4xl">CHECK OUT</h1>
            </header>

            <div className="flex gap-4">
                <form className="flex-1 flex flex-col gap-12">
                    <section className="flex flex-col gap-6">
                        <h1 className="text-4xl font-serif text-yellow-600">1. YOUR INFO</h1>
                        <div className="grid grid-cols-2 gap-5 text-lg">
                            <input type="text" placeholder="First name" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                            <input type="text" placeholder="Last name" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                            <input type="text" placeholder="Email Address" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                            <input type="text" placeholder="Phone Number" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                        </div>
                    </section>

                    <section className="flex flex-col gap-6">
                        <h1 className="text-4xl font-serif text-yellow-600">2. SHIPPING DETAILS</h1>
                        <div className="grid grid-cols-2 gap-5 text-lg">
                            <input type="text" placeholder="Country" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                            <input type="text" placeholder="Town/City" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>

                            <input type="text" placeholder="Street Name" className="w-full col-span-2 px-4 py-2 bg-[#EBE7DFCC]"/>
                            <input type="text" placeholder="Street Name" className="w-full col-span-2 px-4 py-2 bg-[#EBE7DFCC]"/>

                            <input type="text" placeholder="State" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                            <input type="text" placeholder="Postcode/ZIP" className="w-full px-4 py-2 bg-[#EBE7DFCC]"/>
                        </div>
                    </section>

                    <section className="flex flex-col gap-6">
                        <h1 className="text-4xl font-serif text-yellow-600">3. PAYMENT</h1>
                        <div className="flex gap-4">
                            <input type="radio" name="Payment" />
                            <label className="uppercase mr-10">Cash on delivery</label>

                            <input type="radio" name="Payment" />
                            <label className="uppercase">online transfer</label>
                        </div>
                    </section>

                    <section className="flex flex-col gap-6">
                        <h1 className="text-4xl font-serif text-yellow-600">4. NOTE</h1>
                        <textarea placeholder="Note about your order..." className="h-48 py-4 px-6 resize-none bg-[#EBE7DFCC]"/>
                    </section>

                    <button type="button" className="w-fit mx-auto px-24 py-4 rounded-3xl border border-black" onClick={(e) => {e.stopPropagation(); navigate("/GalerieWebsite/Submitted");}}>Place Order</button>
                </form>

                <div className="mx-8 border border-[#887A5E]"/>

                <aside className="flex-[0.6] xl:flex-[0.25] flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-yellow-600">YOUR ORDER</h1>
                    <div className="my-6 border border-[#887A5E]"/>

                    <section className="flex flex-col gap-6 mb-16">
                        {carts && <>
                            {carts.map((artwork, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="w-[16ch] xl:w-[20ch] text-yellow-600">
                                        <p>{artwork.artworkName},</p>
                                        <p>{artwork.dimension},</p>
                                        <p>{artwork.medium}</p>
                                    </div>
                                    <p className="uppercase">RM{artwork.physicalPrice}.00</p>
                                </div>
                            ))} 
                        </>}
                    </section>

                    <div className="my-6 border border-[#887A5E]"/>

                    <section className="uppercase grid grid-cols-2">
                        <p className="text-left font-semibold">subtotal</p>
                        <p className="text-right mb-4">rm1000.00</p>

                        <p className="text-left font-semibold">shipping</p>
                        <p className="text-right mb-4">free shipping</p>

                        <p className="text-left font-semibold">coupon <i class="fa fa-code-fork" aria-hidden="true"></i></p>
                        <p className="text-right">rm30</p>
                    </section>

                    <div className="my-6 border border-[#887A5E]"/>
                    
                    <section className="flex justify-between items-center uppercase">
                        <p>TOTAL</p>
                        <strong className="font-semibold text-xl">RM970</strong>
                    </section>
                </aside>
            </div>
        </main>
    )
}

export default CheckOut_Page;