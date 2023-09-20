 
import Banner from '../Banner/Banner';
import Categori from '../Categori/Categori';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Contact from '../Contact/Contact';
import Recommends from '../Recommends/Recommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>BB-Home</title>
         </Helmet>

         <Banner />
         <Categori />
         <BistroBoss />
         <PopulerMenu />
         <Contact />
         <Recommends />
         <Featured />
         <Testimonials />
      </div>
   );
};

export default Home;
