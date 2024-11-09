import Image from "next/image";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const headerList = [
  {
    id: 1,
    text: "Study Destinations",
    url: "#",
  },
  {
    id: 2,
    text: "Services",
    url: "#",
  },
  {
    id: 3,
    text: "Company",
    url: "#",
  },
  {
    id: 4,
    text: "Upcoming Events",
    url: "#",
  },
];
const Header = () => {
  return (
    <div className="px-8 py-4 flex justify-between items-center bg-[#6C48F0] gap-4 sticky top-0 left-0 w-full z-40">
      <div className="w-1/4">
        <Image
          src="/assets/logo.svg"
          alt="kc overseas"
          width={185}
          height={45}
        />
      </div>
      <div className="w-3/4 hidden md:flex md:justify-end gap-4">
        <div className="text-white md:flex md:justify-end gap-4 items-center">
          {headerList.map((item, index) => (
            <div key={item.id} className="cursor-pointer font-semibold">
              {item.text}
            </div>
          ))}
        </div>
        <Button
          variant="outlined"
          className="!text-white !border-white w-fit"
          onClick={() => {}}
        >
          <div className="normal-case font-semibold">Course Finder</div>
        </Button>
      </div>
      <div className="md:hidden text-white">
        <MenuIcon />
      </div>
    </div>
  );
};
export default Header;
