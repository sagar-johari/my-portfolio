import { IoIosSunny } from "react-icons/io";

export const Header = () => {
  return (
    <>
      <header className="border-b border-1 h-[55px] flex items-center sticky top-0 bg-background z-50">
        <div className="h-full w-full">
          <div className="grid grid-cols-10 h-full ml-[2rem]">
            <div className="col-span-7">
                <div className="flex h-full items-center border-r">
              <svg
                width="180"
                height="40"
                viewBox="0 0 180 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="10"
                  y="30"
                  className="font-jetBrainsMono"
                  fontSize="20"
                  fill="white"
                >
                  Sagar Johari
                </text>
              </svg>
                </div>
            </div>
            <div className="col-span-3 ">
                <div className="flex h-full items-center justify-end pr-[2rem]">
            <IoIosSunny size={28} className="hover:text-yellow-300 duration-300 transition-colors cursor-pointer " />
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
