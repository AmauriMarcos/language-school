import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Button from "./ui/Button";
import { BsClock as ClockIcon } from "react-icons/bs";
import { AiOutlinePhone as PhoneIcon } from "react-icons/ai";
import { IoLocationOutline as LocationIcon } from "react-icons/io5";
import { FaInstagram as InstaIcon } from "react-icons/fa";

type InfoNavItem = {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
};

export function Sidebar() {
  const infoNav: InfoNavItem[] = [
    {
      id: 1,
      icon: <ClockIcon size={34} color="#FF3A3A" />,
      title: "Hours",
      text: "Mon-Fri 8AM - 5PM",
    },
    {
      id: 2,
      icon: <PhoneIcon size={34} color="#FF3A3A" />,
      title: "Call",
      text: "+2342 554 34",
    },
    {
      id: 3,
      icon: <LocationIcon size={34} color="#FF3A3A" />,
      title: "Address",
      text: "Greenpoint, Broolklyn",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="outline" color="#242424">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <div className="w-[130px] md:w-[200px] h-auto m-auto mt-2">
              <Image
                className=""
                src="/assets/dalia_karla.png"
                width={170}
                height={170}
                alt="logo"
              />
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="my-10">
          <div className="flex flex-col items-center gap-4 border-b border-solid border-[#e7e7e7] pb-6 ">
            {infoNav.map(({ id, icon, title, text }) => {
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center gap-2 items-center "
                >
                  {icon}
                  <div className="flex flex-col items-center">
                    <h6 className="text-[.75rem] uppercase font-bold text-[#FF3A3A]">
                      {title}
                    </h6>
                    <p className="text-[.8rem] font-normal">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col w-full justify-between pt-4 items-center mb-2 mt-6">
            <ul className="flex flex-col gap-4 items-center">
              <li className="text-[.85rem] uppercase font-semibold text-[#242424]">
                <a className="hover:text-[#FF3A3A]" href="#">
                  Home
                </a>
              </li>
              <li className="text-[.85rem] uppercase font-semibold text-[#242424]">
                <a className="hover:text-[#FF3A3A]" href="#">
                  About
                </a>
              </li>
              <li className="text-[.85rem] uppercase font-semibold text-[#242424]">
                <a className="hover:text-[#FF3A3A]" href="#">
                  Courses
                </a>
              </li>
            </ul>
            <div className="mt-10 cursor-pointer">
              <InstaIcon color="#242424" size={18} />
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
