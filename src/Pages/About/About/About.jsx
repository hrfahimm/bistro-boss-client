import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import aboutImg from "../../../assets/contact/banner.jpg";
import Contacts from "../Contacts/Contacts";
import ContactFrom from "../ContactFrom/ContactFrom";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>BB-About </title>
      </Helmet>
      <Cover
        className='font-extralight'
        img={aboutImg}
        title='About Us'
      />
      <Contacts />
      <ContactFrom />
    </div>
  );
};

export default About;
