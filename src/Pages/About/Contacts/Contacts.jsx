import Contact from "./Contact";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Contacts = () => {
  const contacts = [
    {
      name: "PHONE",
      img: "http://www.w3.org/2000/svg",
      details: "+88 017309340",
    },
    {
      name: "ADDRESS",
      img: "http://www.w3.org/2000/svg",
      details: " Neyamotpur,Mandari",
    },
    {
      name: "WORKING HOUR",
      img: "http://www.w3.org/2000/svg",
      details: "10:00am to 10:00pm",
    },
  ];

  return (
    <div>
      <SectionTitle
        heading='Visit Us'
        subHeading='OUR LOCATION'></SectionTitle>
      <div className=' grid grid-cols-3 gap-x-4 py-12  text-center  w-[1320px] h-[300px]'>
        {contacts.map((contact) => (
          <Contact
            key={"user_id"}
            contact={contact}></Contact>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
