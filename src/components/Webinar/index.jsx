import CardLayout from "@/components/Webinar/CardLayout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const cardData = [
  {
    id: 1,
    title: "USA Vertual Addmission Day",
    subtitle: "Mar 19 · 05:00 PM to 07:30 PM",
    brief:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: "/assets/webinar/Group 170.png",
    layout: "vertical",
    css: "md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    title: "New Zealand Virtual Admissions Week",
    subtitle: "May 18 - May 21  · 04:30 PM to 06:30 PM",
    brief:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    icon: "/assets/webinar/image 48.png",
    layout: "horizontal",
    css: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "UK Virtual Admissions Week",
    subtitle: "May 24 - May 28  · 04:00 PM to 06:00 PM",
    brief:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    icon: "/assets/webinar/image 49.png",
    layout: "horizontal",
    css: "md:col-span-1 md:row-span-1",
  },
];

const Webinar = () => {
  return (
    <div className="text-center pt-24 md:pt-28 max-w-7xl mx-auto">
      <div className="text-[26px] md:text-[42px] font-semibold text-[#0E1B2C]">
        Webinars & Events
      </div>
      <div className="flex justify-start items-start overflow-x-auto gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 py-8 md:p-16">
        {cardData.map((item) => (
          <CardLayout {...item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 pt-2 text-[#FF7361] font-semibold pb-8 cursor-pointer">
        See more
        <ChevronRightIcon />
      </div>
    </div>
  );
};
export default Webinar;
