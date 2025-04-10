

const Proposal_Page = () => {

    return (
        <main className="flex gap-10 px-20 pt-32 pb-8 bg-[#FFFDF9] max-lg:flex-col">
            <aside className="w-[16rem] lg:w-[24rem] text-8xl flex flex-col gap-6 max-lg:w-full">
                <h1 className="font-serif text-5xl text-[#CC9638]">Upload your art</h1>
                <button className="w-full h-[20rem] bg-[#EBE7DFCC] text-white lg:h-[30rem]">+</button>
                <button className="w-full h-[20rem] bg-[#EBE7DFCC] text-white lg:h-[30rem]">+</button>
                <button className="w-full h-[20rem] bg-[#EBE7DFCC] text-white lg:h-[30rem]">+</button>
            </aside>

            <form className="flex-1 flex flex-col gap-4">
                <h1 className="font-serif text-5xl text-[#CC9638]">Tell Us About You</h1>

                {/* Name */}
                <section className="w-full flex gap-4">
                    <div className="flex-1">
                        <label className="font-semibold">First Name</label>
                        <input type="text" placeholder="John" className="w-full  mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold">Last Name</label>
                        <input type="text" placeholder="London"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>
                </section>
                
                {/* Email Address and Phone Number */}
                <section className="flex gap-4">
                    <div className="flex-1">
                        <label className="font-semibold">Email Address</label>
                        <input type="text" placeholder="Johnlondon@gmail.com"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold">Phone Number</label>
                        <input type="text" placeholder="010-0000007"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>
                </section>

                {/* Gender, Age, Occupation, Experience */}
                <section className="flex gap-4">
                    <div className="flex-1">
                        <label className="font-semibold">Gender</label>
                        <input type="text" placeholder="Male"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold">Age</label>
                        <input type="number" placeholder="22"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold">Occupation</label>
                        <input type="text" placeholder="Artist"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-[4]">
                        <label className="font-semibold">Years of Experiences</label>
                        <input type="number" placeholder="10"  className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>
                </section>

                {/* Address */}
                <div>
                    <label className="font-semibold">Home Address</label>
                    <input type="text" placeholder="House is in london" className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                </div>

                {/* City, Postcode, Art Styles */}
                <section className="flex gap-4">
                    <div className="flex-1">
                        <label className="font-semibold">City</label>
                        <input type="text" placeholder="Johnlondon@gmail.com" className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold">Postcode</label>
                        <input type="text" placeholder="010-0000007" className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold">Type of art styles</label>
                        <input type="text" placeholder="Oil Painting" className="w-full mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>
                </section>

                {/* About Me */}
                <div>
                    <label className="font-semibold">About Me *150 words</label>
                    <textarea placeholder="Is a cool guy" className="w-full h-[12rem] resize-none mt-2 px-2 py-1 bg-[#EBE7DFCC]"/>
                </div>

                {/* Links */}
                <section className="flex flex-col gap-2">
                    <h4 className="font-serif font-semibold text-lg">Links</h4>

                    <div className="flex gap-4">
                        <label className="w-[12ch]">Facebook</label>
                        <input type="text" placeholder="" className="w-full px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>
                    
                    <div className="flex gap-4">
                        <label className="w-[12ch]">Instagram</label>
                        <input type="text" placeholder="" className="w-full px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex gap-4">
                        <label className="w-[12ch]">Twitter</label>
                        <input type="text" placeholder="" className="w-full px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>

                    <div className="flex gap-4">
                        <label  className="w-[12ch]">Website</label>
                        <input type="text" placeholder="" className="w-full px-2 py-1 bg-[#EBE7DFCC]"/>
                    </div>
                </section>

                <h1 className="font-serif text-[#CC9638] text-5xl mt-6">CURATOR NOTES</h1>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dapibus ligula, eu pulvinar justo. Aenean nec tellus id elit ullamcorper semper sit amet ut turpis. </p>

                <section className="bg-[#EBE7DFCC] px-6 py-4 rounded-2xl">
                    <h5 className="text-lg font-semibold mb-2">Commissions</h5>
                    <p className="mb-1">Are you willing to do commissions for private clients?</p>
                    <div className="flex gap-6 mb-3">
                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>Yes</label>
                        </div>

                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>No</label>
                        </div>
                    </div>

                    <p className="mb-1">Are you willing to do commissions for corporate clients?</p>
                    <div className="flex gap-6 mb-3">
                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>Yes</label>
                        </div>

                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>No</label>
                        </div>
                    </div>
                </section>

                <button className="w-fit ml-auto px-16 py-2 rounded-full bg-black text-white xl:px-32 xl:py-3 xl:text-2xl xl:mt-4">Submit</button>
            </form>
        </main>
    )
}

export default Proposal_Page;