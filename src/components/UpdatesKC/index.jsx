import HiringCard from "@/components/UpdatesKC/HiringCard";
import AgentCard from "@/components/UpdatesKC/AgentCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const data = [
  {
    id: 1,
    text: "American International Recruitment Council",
    highlight: "Certified Agents",
    subText: "October 2018 - 2028",
    img: "/assets/update-kc/image 50.png",
  },
  {
    id: 2,
    text: "The British Council",
    highlight: (
      <span>
        Advanced Agent <br />
        Certificate
      </span>
    ),
    subText: "August 2016 - 2018",
    img: "/assets/update-kc/image 52 (1).png",
  },
];

const UpdatesKC = () => {
  return (
    <div className="pb-32 max-w-7xl mx-auto">
      <div className="text-[26px] md:text-[42px] font-semibold text-[#0E1B2C] text-center pt-[80px]">
        Latest KC Updates
      </div>
      <div className="flex justify-start items-start md:grid md:grid-cols-4 gap-8 pt-10 overflow-x-auto md:overflow-auto pl-4 md:pl-0 pb-10 md:overflow-visible">
        <HiringCard />
        {data.map((item) => (
          <AgentCard {...item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-8 pt-10 text-[#FF7361] font-semibold">
        <div>
          More News
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};
export default UpdatesKC;
