import Image from "next/image";
import EnquireButton from "@/components/common/Button/EnquireButton";

const serviceData = [
  {
    id: 1,
    text: "Test Preparing & Coaching",
    icon: "/assets/service/Group 3823.svg",
  },
  {
    id: 2,
    text: "Application Assistance",
    icon: "/assets/service/Vector.svg",
  },
  {
    id: 3,
    text: "Education Loans & Fee Payments",
    icon: "/assets/service/Group 3318.svg",
  },
  {
    id: 4,
    text: "Insurance, Forex & Travel Assistance",
    icon: "/assets/service/Vector-1.svg",
  },
];

const cardData = [
  "Virtual & In Person Coaching and Counselling",
  "Comprehensive Assistance for Applications, Admissions & Visas",
  "High Value Scholarships and Study Loans",
];
const ServiceProvider = ({}) => {
  return (
    <div className="text-center pt-[72px] md:max-w-5xl md:mx-auto px-5 md:px-0">
      <div className="text-[26px] md:text-[42px] font-semibold text-[#0E1B2C] pb-10">
        Services we provide
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
        {serviceData.map((item, index) => (
          <div
            className="flex justify-start items-center gap-2 shadow-[0px_8px_25px_rgba(0,0,0,0.1)] rounded-[10px] px-5 py-6 md:px-8 md:py-6 text-[#0E1B2C] md:text-[18px] md:font-semibold"
            key={item.id}
          >
            <Image src={item.icon} alt={item.text} width={20} height={20} />{" "}
            {item.text}
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-28">
        <EnquireButton>
          <div className="px-4">Enquire Now</div>
        </EnquireButton>
      </div>
      <div className="md:flex justify-center items-center md:gap-20">
        <div>
          <div className="md:min-w-[400px]">
            <img
              src={"/assets/service/Group 3291.png"}
              alt="Group"
              width={490}
              height={400}
            />
          </div>
        </div>
        <div className="text-[#0E1B2C] pt-7">
          <div className="text-[26px] font-semibold pb-14 md:pb-4 md:text-left">
            Realize your global ambitions with us
          </div>
          <div className="font-light pb-8 md:pb-4 text-left">
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </div>
          <div>
            {cardData.map((item) => (
              <div className="flex justify-start items-center text-left gap-2 pt-4">
                <div className="p-4 rounded-full bg-white shadow-[0px_10px_15px_0px_#C57C711A,0px_0px_5px_0px_#0000000D] relative">
                  <img
                    src="/assets/service/Star 4.svg"
                    alt={item}
                    className="w-[17px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                  />
                </div>
                <div className="w-full ">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceProvider;
