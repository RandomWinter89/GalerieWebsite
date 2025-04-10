import NavigationBar from "./components/NavigationBar";
import FooterBar from "./components/FooterBar";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Cart_Page from "./pages/Cart_Page";
import Blog_Page from "./pages/Blog_Page";
import Artist_Page from "./pages/Artist_Page";
import Purchase_Page from "./pages/Purchase_Page";
import CheckOut_Page from "./pages/CheckOut_Page";
import Bookmark_Page from "./pages/Bookmark_Page";
import Proposal_Page from "./pages/Proposal_Page";
import Category_Page from "./pages/Category_Page";
import Community_Page from "./pages/Community_Page";
import Exhibition_Page from "./pages/Exhibition_Page";
import PressRelease_Page from "./pages/PressRelease_Page";
import ArtworkAR_Page from "./pages/ArtworkAR_Page";
import ArtworkStory_Page from "./pages/ArtworkStory_Page";
import ArtCollection_Page from "./pages/ArtCollection_Page";
import Submitted_Page from "./pages/Submitted_Page";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Homepage/>} />
        <Route path="/Bookmark" element={<Bookmark_Page/>} />
        <Route path="/Collection" element={<ArtCollection_Page/>} />
        <Route path="/Category/:Id?" element={<Category_Page/>} /> {/* Part of Category - Blog */}
        <Route path="/Proposal" element={<Proposal_Page/>} />
        <Route path="/Cart" element={<Cart_Page />} />

        <Route path="/Checkout" element={<CheckOut_Page/>} />
        <Route path="/Submitted" element={<Submitted_Page />} />
        {/* Require ID */}
        <Route path="/Purchase/:Id?" element={<Purchase_Page/>} />
        <Route path="/Artist/:Id?" element={<Artist_Page/>} />
        <Route path="/Story/:Id?" element={<ArtworkStory_Page/>} />
        <Route path="/AR/:Id?" element={<ArtworkAR_Page/>} />

        {/* Require ID Page */}
        <Route path="/Exhibition/:Id?" element={<Exhibition_Page/>} />
        <Route path="/PressRelease/:Id?" element={<PressRelease_Page/>} />
        <Route path="/Community/:Id?" element={<Community_Page/>} />
        <Route path="/Blog/:Id?" element={<Blog_Page/>} />
      </Route>
      {/* <FooterBar /> */}
    </Routes>
  )
}

export default App
