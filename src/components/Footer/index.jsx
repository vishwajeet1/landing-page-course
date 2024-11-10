import EnquireButton from "@/components/common/Button/EnquireButton";

const Footer = () => {
  return (
    <div className="relative">
      <img
        src={"/assets/footer/Rectangle 1767.png"}
        alt="footer"
        className="w-full h-[100px] absolute top-[-60px] left-0"
      />
      <img
        src="/assets/footer/Union.png"
        className="absolute left-[10%] top-[-80px] md:top-[-60px] transform translate-y-[-30%] z-30"
        width={123}
        height={131}
      />
      <div className="bg-[#0E1B2C] text-center relative z-20 pb-12">
        <div className="text-[26px] md:text-[42px] text-white font-semibold">
          Stay updated with KC Overseas
        </div>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 pt-[50px]">
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              className="input"
              placeholder="email"
            />
          </label>

          <label htmlFor="area-of-interest">
            <select id="area-of-interest" className="drop-down">
              <option value="interset 1">Interest 1</option>
              <option value="interset 2">Interest 2</option>
            </select>
          </label>
          <EnquireButton customCss="w-[300px] md:w-auto">
            Suscribe Now
          </EnquireButton>
        </form>
        <div className="px-4 pt-8 md:hidden">
          <div className="border-t border-white/[.5] w-full h-[20px]"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
