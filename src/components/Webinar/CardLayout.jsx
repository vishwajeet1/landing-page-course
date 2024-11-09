import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CardLayout = ({ title, subtitle, brief, icon, layout, css }) => {
  return (
    <div
      className={[
        "bg-white shadow-[0px_6px_50px_0px_#0000001A] rounded-[10px] min-w-[300px] ml-4 md:ml-0 h-full",
        layout === "vertical" ? "" : "md:flex md:max-h-[250px]",
        css || "",
      ].join(" ")}
    >
      <div
        className={[
          "w-full h-[200px] relative",
          layout === "vertical"
            ? "md:w-full md:h-[300px]"
            : "md:min-w-[195px] md:max-w-[196px] md:h-full",
        ].join(" ")}
      >
        <img
          src={icon}
          alt={title}
          className={[
            "absolute top-0 left-0 w-full h-full rounded-t-[10px]",
            layout === "vertical" ? "" : "md:rounded-r-[0] md:rounded-l-[10px]",
          ].join(" ")}
        />
      </div>
      <div className="px-8 text-left">
        <div className="text-[#226CF5] text-[14px] pt-4">{subtitle}</div>
        <div className="text-[#0E1B2C] text-[22px] pt-3 font-semibold md:font-regular">
          {title}
        </div>
        <div className="text-[#64647A] pt-3">{brief}</div>
        <div className="flex justify-start items-center gap-2 pt-2 text-[#FF7361] font-semibold pb-8">
          Register Now
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};
export default CardLayout;
