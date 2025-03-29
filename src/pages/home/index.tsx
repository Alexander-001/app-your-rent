import Footer from "../../components/Footer";
import { useHome } from "./useHome";

const Home: React.FC<any> = () => {
  const {} = useHome();
  return (
    <>
      {/* <Header /> */}
      <Footer />
    </>
  );
};

export default Home;
