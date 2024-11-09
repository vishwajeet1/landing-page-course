const AgentCard = ({ text, highlight, subText, img, id }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-[-5px_4px_50px_0px_#0000001A] rounded-[10px] p-4 h-full text-center min-w-[300px] min-h-[476px]">
      <img src={img} alt={text} />
      {id === 2 && <div className="h-[40px]" />}
      <div className="text-[#0E1B2C] text-[18px] pt-[26px] pb-[17px]">
        {text}
      </div>
      <img src={"/assets/update-kc/Group 2502.png"} alt={text} />
      <div className="text-[#226CF5] text-[22px] pt-[40px]">{highlight}</div>
      <div className="text-[#64647A] text-[18px] pt-[10px]">{subText}</div>
    </div>
  );
};
export default AgentCard;
