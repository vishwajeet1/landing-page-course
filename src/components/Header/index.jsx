import Image from "next/image";
import { Button, Fade, Modal } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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
  const [showNav, setShowNav] = useState(false);
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
      <div
        className="md:hidden text-white"
        onClick={() => {
          setShowNav(true);
        }}
      >
        <MenuIcon />
      </div>
      {showNav && (
        <Modal
          open={showNav}
          className="fixed top-0 left-0 w-full h-full bg-[#6C48F0] transition ease-in-out delay-150"
        >
          <Fade in={showNav}>
            <div className="p-4">
              <div className="flex justify-between items-center gap-2 py-1 text-white">
                <Image
                  src="/assets/logo.svg"
                  alt="kc overseas"
                  width={185}
                  height={45}
                />
                <CloseIcon onClick={() => setShowNav(false)} />
              </div>
              <div className="text-white py-4 ">
                {headerList.map((item, index) => (
                  <div
                    key={item.id}
                    className={[
                      "cursor-pointer font-semibold py-4",
                      "border-b border-gray-200",
                    ].join(" ")}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
};
export default Header;
