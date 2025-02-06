import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../routes/routers";

function Layouts() {
  return (
    <>
      <Header />

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layouts;
