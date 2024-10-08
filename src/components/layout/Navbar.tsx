import Image from "next/image";
import { BsClock as ClockIcon } from "react-icons/bs";
import { AiOutlinePhone as PhoneIcon } from "react-icons/ai";
import { IoLocationOutline  as LocationIcon} from "react-icons/io5";
import { FaInstagram as InstaIcon } from "react-icons/fa";

const Navbar = () => {
  const infoNav = [
    { id: 1, icon: <ClockIcon size={27} color="#FF3A3A" />, title: "Hours", text: "Mon-Fri 8AM - 5PM" },
    { id: 2, icon: <PhoneIcon size={27} color="#FF3A3A" />, title: "Call", text: "+2342 554 34" },
    {
      id: 3,
      icon: <LocationIcon size={27} color="#FF3A3A" />,
      title: "Address",
      text: "Greenpoint, Broolklyn",
    },
  ];
  return (
    <div className="flex flex-col">

      <div className="w-full flex justify-between items-center border-b border-solid border-[#e7e7e7] pb-6">
        <div className="w-[200px] h-auto">
          <Image
            className=""
            src="/assets/daliakarla.png"
            width={170}
            height={170}
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-8">
          {infoNav.map(({ id, icon, title, text }) => {
            return (
              <div key={id} className="flex gap-2 items-center ">
                {icon}
                <div className="flex flex-col">
                  <h6 className="text-[.7rem] uppercase font-bold text-[#FF3A3A]">
                    {title}
                  </h6>
                  <p className="text-[.8rem] font-normal">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between pt-4 items-center mb-2">
        <ul className="flex gap-10">
            <li className="text-[.85rem] uppercase font-semibold text-[#242424]">
                <a className="hover:text-[#FF3A3A]" href="#">Home</a>
            </li>
            <li className="text-[.85rem] uppercase font-semibold text-[#242424]">
                <a  className="hover:text-[#FF3A3A]" href="#">About</a>
            </li>
            <li className="text-[.85rem] uppercase font-semibold text-[#242424]">
                <a  className="hover:text-[#FF3A3A]" href="#">Courses</a>
            </li>
        </ul>
        <InstaIcon color="#242424" size={18} />
      </div>
    </div>
  );
};

export default Navbar;
