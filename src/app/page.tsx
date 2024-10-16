'use client'
import Hero from "@/components/layout/Hero";
import { descriptionData } from "./dummyData/descriptionData";
import DescriptionBlock from "@/components/DescriptionBlock";
import Testemonials from "@/components/layout/testemonials/Testemonials";
import OurCourses from "@/components/OurCourses";
import Prices from "@/components/Prices";


export default function Home() {
  return (

    <div className="">
      <Hero/>
      <div className=" w-full md:w-[80%] gap-10 m-auto flex flex-col  items-center md:flex-row my-4 md:my-10  p-8 ">
        {descriptionData.map(({id, icon, title, text}) => {
          return(
            <DescriptionBlock 
              key={id}
              id={id}
              icon={icon}
              title={title}
              text={text}
            />
          )
        })}
      </div>
      <Testemonials/>
      <OurCourses/>
      <Prices/>
      <div className="md:mt-36">
      <div className=" w-full md:w-[80%] gap-10 m-auto flex flex-col  items-center md:flex-row my-4 md:my-10  p-8 ">
        {descriptionData.map(({id, icon, title, text}) => {
          return(
            <DescriptionBlock 
              key={id}
              id={id}
              icon={icon}
              title={title}
              text={text}
            />
          )
        })}
      </div>
      </div>


    </div>
  );
}
