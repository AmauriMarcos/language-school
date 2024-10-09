import { PiBookmarksSimpleBold as BookmarkIcon } from "react-icons/pi";
import { FaStoreAlt as FacilityIcon } from "react-icons/fa";
import { IoLocationOutline as LocationIcon } from "react-icons/io5";
import { IoSchoolOutline as CourseIcon } from "react-icons/io5";

type DescriptionDataItem = {
    id: number;
    icon: JSX.Element;
    title: string;
    text: string
  }

export const descriptionData: DescriptionDataItem[] = [
    {
      id: 1,
      icon: <BookmarkIcon size={45} color="#FF3A3A" />,
      title: 'Methodology',
      text: "Our teaching approach emphasizes interactive, immersive learning. Engage with real-world scenarios and collaborative projects.",
    },
    {
      id: 2,
      icon: <FacilityIcon size={45} color="#FF3A3A" />,
      title: 'Facility',
      text: "Experience our modern facility equipped with cutting-edge resources. Comfortable spaces designed to enhance your learning.",
    },
    {
      id: 3,
      icon: <LocationIcon size={45} color="#FF3A3A" />,
      title: 'Location',
      text: "Conveniently situated in the city center, easily accessible by public transport. Explore nearby cafes, parks, and cultural sites.",
    },
    {
      id: 4,
      icon: <CourseIcon size={45} color="#FF3A3A" />,
      title: 'Courses',
      text: "We offer diverse courses tailored to all levels and interests. Choose from beginner to advanced options with flexible schedules.",
    },
  ];