import { IoNavigateCircleOutline, IoCart } from "react-icons/io5";
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import HeavenGate from "../assets/HeaveGate.png";

import { motion } from "framer-motion";

const NavLink = ({direction, info, handleClose}) => {
  return (
    <Link to={`/GalerieWebsite${direction}`} onClick={handleClose} className="max-sm:text-sm max-lg:text-lg text-5xl text-left">
      {info}
    </Link>
  )
}

const NavigationBar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isSimple, setIsSimple] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  
  const [isInfo, setIsInfo] = useState(false);
  const [isExpend, setIsExpend] = useState(false);
  const [isSubmode, setIsSubMode] = useState(false);

  let location = useLocation();

  const handleExpand = () => setIsExpend(!isExpend);
  const handleSubscribe = () => setIsSubMode(!isSubmode);

  const handleClose = () => {
    handleExpand();
    setIsSubMode(false);
  }

  useEffect(() => {
    let order = location.pathname.split('/')[1];
    
    if (order.trim().length === 0 || order === "Collection" || order === "Artist") {
      setIsSimple(false);
      setIsWhite(false);
      setIsInfo(true);
      setIsTransparent(false);
    } else if (order === "ArtworkAR" || order === "Purchase") {
      setIsSimple(true);
    } else if (order === "ArtworkStory") {
      setIsTransparent(true);
    } else {
      setIsSimple(true);
      setIsWhite(true);
      setIsInfo(false);
      setIsTransparent(false);
    }

  }, [location])

  useEffect(() => {
    if (isExpend) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => document.body.classList.remove('overflow-hidden');
  }, [isExpend])

  return (
    <>
      <header 
        className={`absolute z-50 flex flex-col w-full px-8 py-4 border-white font-mono font-extralight
        ${isExpend ? "h-svh" : "h-auto"}
        ${isExpend || isSimple ? "border-none" : "border-b-2"}
        ${isExpend || !isWhite ? "bg-black text-white" : "bg-[#FFFDF9] text-black" }
      `}>
        {/* Navbar */}
        <section className="flex justify-between w-full max-sm:flex-col max-sm:gap-4">
          {/* ======= LEFT SIDE */}
          <section className="flex items-center gap-8 max-sm:flex-col max-sm:gap-2">
            <h1 className="font-cinzel font-semibold text-4xl max-lg:text-2xl max-sm:text-base">GALERIE</h1> {/* Logo */}

            {isInfo && (
              < >
                <p className="font-heebo font-light text-base max-lg:text-sm max-sm:text-xs">Open today 10:00 a.m. to 6:00 p.m.</p>
                <div className="flex items-center gap-1 font-heebo font-light text-base max-lg:text-sm max-sm:text-xs"> 
                  <IoNavigateCircleOutline /> 
                  <p>Galerie, Cyberjaya, 62250</p>
                </div>
              </>
            )}
          </section>

          {/* ======= RIGHT SIDE */}
          <section className="flex items-center gap-4 max-sm:mx-auto">
            <Link to="/Cart"><IoCart size={26}/></Link> {/* Cart */}
            <button onClick={handleClose} className="font-heebo font-bold">MENU</button> {/* Burger Menu */}
          </section>
        </section>

        {/* Burgar Menu */}
        <motion.section 
          className="overflow-hidden" 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isExpend ? "100svh" : "0px", opacity: isExpend ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Container */}
          {!isSubmode && (
            <div className="flex gap-4 h-full py-16">
              <nav className="flex-1 flex flex-col justify-center items-start gap-8 px-16 border-white border-r-2 ">
                <NavLink direction="" info="Home" handleClose={handleExpand}/>
                <NavLink direction="/Bookmark" info="Bookmark" handleClose={handleExpand}/>
                <NavLink direction="/Collection" info="Collection" handleClose={handleExpand}/>
                <NavLink direction={`/Category/${3}`} info="Blog" handleClose={handleExpand}/>
                <NavLink direction="/Proposal" info="Propose Your Work" handleClose={handleExpand}/>
              </nav>

              <aside className="flex-1 flex flex-col justify-center gap-6 px-16">
                <article className="flex flex-col gap-2">
                  <h4>About Us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dapibus ligula, eu pulvinar justo. Aenean nec tellus id elit ullamcorper semper sit amet ut turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </article>

                {/* CREATE A HOVER EFFECT --- THIS LEAD TO SUBSCRIBE PAGE */}
                <article className="flex flex-col gap-2 cursor-pointer" onClick={handleSubscribe}>
                  <h4>Newsletters</h4>
                  <p>Subscribe Us To Receive Latest Notification </p>
                </article>
              </aside>
            </div>
          )}
          
          {isSubmode && (
            <div className="flex flex-col-reverse justify-center items-center gap-10 h-full py-24 px-20 xl:gap-20 xl:flex-row xl:py-16 xl:px-[20rem]">
              <article className="flex-1 flex flex-col gap-6 w-full text-white">
                  <h1 className="font-cinzel uppercase text-5xl xl:text-6xl">Subscribe us</h1>
                  <span className="my-2 border-b border-white" />
                  <p className="font-heebo font-light xl:text-2xl">Subscribe us to receive e-mail updates on exhibitions, new collections, and more :)</p>

                  <button className="flex justify-between w-full py-2 px-4 border border-white font-heebo font-light text-lg hover:bg-white hover:text-black xl:text-2xl">
                      <p>Email Address</p>
                      <p>-----{'>'}</p>
                  </button>
              </article>

              <img className="h-[32rem] aspect-[3/4] rounded-t-full object-cover bg-center" src={`${HeavenGate}`}/>
            </div>
          )}
        </motion.section>
      </header>
      
      {/* ---Page--- */}
      <Outlet />
    </>
  )
}

export default NavigationBar;