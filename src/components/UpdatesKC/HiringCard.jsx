const HiringCard = () => {
  return (
    <div className="text-[#0E1B2C] bg-[#FDAF4D] shadow-[-5px_4px_50px_0px_#0000001A] relative overflow-hidden p-12 rounded-[10px] md:col-span-2 min-w-[300px]">
      <div className="font-semibold text-[26px] md:text-[42px] pb-[21px]">
        We’re Hiring!
      </div>
      <div className="md:text-[22px] pb-[144px]">
        KC continues recruitments for its offices across India and Asia even
        during the unprecedented times of Covid.
      </div>
      <button className="text-[#FF7361] bg-white px-[31px] py-[14px] font-semibold rounded-[8px]">
        Apply Now
      </button>
      <img
        src="/assets/update-kc/Group 2499.png"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};
export default HiringCard;
