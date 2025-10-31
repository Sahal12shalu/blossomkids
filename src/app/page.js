
import Carousel from "./Pages/Advertisement/page";
import  FocusCardsDemo from "./Pages/Cards/page";
import Connectus from "./Pages/Contact/page";
import Footer from "./Pages/Footer/page";
import Homepage from "./Pages/Home/page";
import Navbar from "./Pages/Navbar/page";
import Notepage from "./Pages/Note/page";
import Products from "./Pages/products/page";
import Review from "./Pages/Review/page";
import Whatsapp from "./Pages/Whatsapp/page";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Homepage />
      <FocusCardsDemo />
      <Carousel />
      <Notepage />
      <Products />
      <Review />
      <Whatsapp />
      <Connectus />
      <Footer />
    </div>
  );
}
