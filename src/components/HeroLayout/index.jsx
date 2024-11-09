import EnquireButton from "@/components/common/Button/EnquireButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const HeroLayout = () => {
  return (
    <div className="relative mb-[50px] md:mb-[70px]">
      <div className="bg-[#6C48F0] text-center py-8 md:pt-[102px] px-4 md:px-0 text-white relative mb-12">
        <div className=" font-semibold text-[14px] md:text-[18px] pb-8">
          <span className="text-white/[.5]">Home • </span>Pune Branch
        </div>
        <div className="text-[26px] md:text-[42px] font-semibold pb-2 md:pb-8">
          KC Overseas Education <br />
          <span className="pune_highlight relative z-20">Pune</span>
        </div>
        <div className="font-normal pb-8 max-w-2xl mx-auto">
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          <EnquireButton>
            <div className="px-4">Enquire Now</div>
          </EnquireButton>
          <div className="flex justify-center items-center gap-2">
            <div className="relative bg-white p-5 rounded-full">
              <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-[#0E1B2C]">
                <KeyboardArrowDownIcon />
              </div>
            </div>
            Branch Address
          </div>
        </div>
        <img
          src={"/assets/hero/Ellipse 589.svg"}
          width={6}
          height={6}
          className="absolute top-[10%] left-[60%] hidden md:block"
          alt="icon"
        />
        <img
          src={"/assets/hero/Ellipse 590.svg"}
          width={6}
          height={6}
          className="absolute top-[90%] left-[216px] hidden md:block"
          alt="icon"
        />
        <img
          src={"/assets/hero/Ellipse 591.svg"}
          width={6}
          height={6}
          className="absolute top-[10%] left-[30%] hidden md:block"
          alt="icon"
        />
        <img
          src={"/assets/hero/Star 1.svg"}
          width={20}
          height={20}
          className="absolute top-[40%] left-[10%] hidden md:block"
          alt="icon"
        />
        <img
          src={"/assets/hero/Star 1.svg"}
          width={18}
          height={18}
          className="absolute top-[30%] left-[90%] hidden md:block"
          alt="icon"
        />
        <img
          src={"/assets/hero/Star 4.svg"}
          width={18}
          height={18}
          className="absolute top-[90%] left-[90%] hidden md:block"
          alt="icon"
        />
      </div>
      <div className="absolute bottom-[-50px] h-[110px] md:bottom-[-70px] w-full md:h-[150px] rounded-b-[50%] bg-[#6C48F0] z-[-1]" />
    </div>
  );
};
export default HeroLayout;
