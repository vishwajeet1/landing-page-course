import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const data = [
  {
    id: 1,
    icon: "/assets/dream-university/Group 3318.png",
    title: "Counselling",
    subtitle: "Plan your Academic and Career Goals",
  },
  {
    id: 2,
    icon: "/assets/dream-university/Group 3318 (1).png",
    title: "Test Preparation",
    subtitle: "Appear for Standardized Tests",
  },
];
const DreamUniversity = () => {
  return (
    <div className="bg-[#DBD9FF] py-16 mt-20 text-[#0E1B2C] relative px-5 md:px-0">
      <div className="text-center relative z-10">
        <div className="font-semibold text-[26px] md:text-[42px]">
          7 Easy Steps to Land in your Dream University
        </div>
        <div className="flex justify-start md:justify-end 2xl:justify-center items-start gap-10 md:gap-20 pt-32 md:pt-52 overflow-x-auto md:overflow-hidden relative">
          {data.map((items) => (
            <div className="shadow-[0px_6px_50px_0px_#0000001A] bg-white rounded-[10px] min-w-[274px] md:min-w-[440px] min-h-[209px] md:min-h-[260px] flex flex-col justify-center items-center text-[#0E1B2C] relative">
              <img
                src={items.icon}
                alt={items.title}
                width={105}
                height={120}
              />
              <div className="text-[18px] pt-6 pb-2 font-semibold">
                {items.title}
              </div>
              <div className="text-[14px]">{items.subtitle}</div>
              <div className="p-4 absolute top-[0] left-[50%] translate-x-[-50%] translate-y-[-50%] transform rotate-45 bg-white" />
              <div
                className={[
                  "p-9 absolute rounded-full top-[-70px] left-[50%] translate-x-[-50%] translate-y-[-50%] transform z-20",
                  items.id === 1
                    ? "bg-white"
                    : "text-[#64647A]/[.5] border border-[#64647A]/[.5] bg-[#DBD9FF]",
                ].join(" ")}
              >
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-[26px] ">
                  {items.id}
                </div>
              </div>
              <div className="absolute top-[-70px] left-[calc(100%+38px)] translate-x-[-50%] translate-y-[-50%] transform w-full border-b border-[#64647A]/[.5] h-[1px] border-dashed" />
            </div>
          ))}
          <div className="bg-[linear-gradient(270deg,#DBD9FF_46.66%,rgba(219,217,255,0)_96.77%)] h-full absolute right-0 w-[20%] top-0 z-20 hidden md:block" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 pt-10 text-[#FF7361] font-semibold cursor-pointer">
        <div>
          <ChevronLeftIcon /> Previous Step
        </div>
        <div>
          Next Step
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};
export default DreamUniversity;
