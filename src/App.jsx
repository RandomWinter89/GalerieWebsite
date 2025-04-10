import NavigationBar from "./components/NavigationBar";
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
      <Route path="/GalerieWebsite" element={<NavigationBar />}>
        <Route index element={<Homepage/>} />
        <Route path="/GalerieWebsite/Bookmark" element={<Bookmark_Page/>} />
        <Route path="/GalerieWebsite/Collection" element={<ArtCollection_Page/>} />
        <Route path="/GalerieWebsite/Category/:Id?" element={<Category_Page/>} /> {/* Part of Category - Blog */}
        <Route path="/GalerieWebsite/Proposal" element={<Proposal_Page/>} />
        <Route path="/GalerieWebsite/Cart" element={<Cart_Page />} />

        <Route path="/GalerieWebsite/Checkout" element={<CheckOut_Page/>} />
        <Route path="/GalerieWebsite/Submitted" element={<Submitted_Page />} />
        {/* Require ID */}
        <Route path="/GalerieWebsite/Purchase/:Id?" element={<Purchase_Page/>} />
        <Route path="/GalerieWebsite/Artist/:Id?" element={<Artist_Page/>} />
        <Route path="/GalerieWebsite/Story/:Id?" element={<ArtworkStory_Page/>} />
        <Route path="/GalerieWebsite/AR/:Id?" element={<ArtworkAR_Page/>} />

        {/* Require ID Page */}
        <Route path="/GalerieWebsite/Exhibition/:Id?" element={<Exhibition_Page/>} />
        <Route path="/GalerieWebsite/PressRelease/:Id?" element={<PressRelease_Page/>} />
        <Route path="/GalerieWebsite/Community/:Id?" element={<Community_Page/>} />
        <Route path="/GalerieWebsite/Blog/:Id?" element={<Blog_Page/>} />
      </Route>
    </Routes>
  )
}

export default App
