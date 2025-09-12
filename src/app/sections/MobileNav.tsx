import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MobileNav({
  activeTab,
  setActiveTab,
}: {
  activeTab?: number;
  setActiveTab?: Dispatch<SetStateAction<number>>;
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openResourceMenu, setOpenResourceMenu] = useState(false);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);
  const [changeMenu, setChangeMenu] = useState(false);

  useEffect(() => {
    if (changeMenu) {
      setOpenMenu(!openMenu);
    }
  }, [changeMenu]);

  const handleLinkClick = () => {
    setOpenMenu(false);
    setChangeMenu(false);
  };

  return (
    <>
      <div
        className={`--mobile-nav text-gray-600 body-font ${
          openMenu ? "h-screen" : "h-full"
        } md:hidden z-[10000]`}
      >
        <div className="w-[80%] h-full container mx-auto flex justify-between items-center pt-4">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="ihub-Drishti"
              width={200}
              height={100}
              className="w-28"
            />
          </Link>
          <Image
            src="/menu.webp"
            alt="logo"
            width={200}
            height={100}
            className="w-6"
            onClick={() => setOpenMenu(true)}
          />
          {openMenu && (
            <motion.div
              className="menu w-screen h-screen fixed top-0 left-0 bg-white p-8"
              initial={{ translateX: 150, opacity: 0.5 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/menu-close.webp"
                width={100}
                height={100}
                className="w-4 absolute top-8 right-8"
                alt="close"
                id="close-ico"
                onClick={() => setOpenMenu(false)}
              />
              <div className="--menu-items flex flex-col h-full mt-4 w-full text-center gap-6 text-xl font-cerealMed tracking-wide scale-90">
                <Link href="/#focus" onClick={handleLinkClick}>
                  Focus Area
                </Link>
                <Link href="/#project" onClick={handleLinkClick}>
                  Projects
                </Link>
                <Link href="/#mrlab" onClick={handleLinkClick}>
                  MR Labs
                </Link>
                <div
                  className={`w-fit mx-auto border-transparent transition-all duration-200 ease-linear cursor-pointer flex flex-col gap-2 relative`}
                  onClick={() => setOpenResourceMenu(!openResourceMenu)}
                >
                  <span className="flex gap-2 mx-auto">
                    <p>People</p>
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      className="w-6"
                      width={20}
                      height={20}
                    />
                  </span>
                  {openResourceMenu && (
                    <motion.div
                      className="--menu p-2 bg-white text-black relative top-2 left-0 rounded-lg z-[3000] flex flex-col gap-1"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <a href="/coordinators" target="_blank">
                        <button className="px-6 py-2 text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          Vertical Coordinators
                        </button>
                      </a>
                      <a href="/#team">
                        <button className="px-6 py-2 text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          Team
                        </button>
                      </a>
                    </motion.div>
                  )}
                </div>
                <div
                  className={`w-fit mx-auto border-transparent transition-all duration-200 ease-linear cursor-pointer flex flex-col gap-2 relative`}
                  onClick={() => setOpenServiceMenu(!openServiceMenu)}
                >
                  <span className="flex gap-2 mx-auto">
                    <p>Services</p>
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      className="w-6"
                      width={20}
                      height={20}
                    />
                  </span>
                  {openServiceMenu && (
                    <motion.div
                      className="--menu p-2 bg-white text-black relative top-2 left-0 rounded-lg z-[3000] flex flex-col gap-1"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <a href="/" target="_blank">
                        <button className="px-6 py-2 text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          Projects Deliver Related to AR, VR and MR
                        </button>
                      </a>
                      <a href="/">
                        <button className="px-6 py-2 text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          Consultancy Projects
                        </button>
                      </a>
                      <a href="/">
                        <button className="px-6 py-2 text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          3D Rendering Services
                        </button>
                      </a>
                    </motion.div>
                  )}
                </div>
                <Link href="/#activity" onClick={handleLinkClick}>
                  Outreach Activity
                </Link>
                <Image
                  src="/logo.webp"
                  alt="logo"
                  width={200}
                  height={100}
                  className="w-[50%] mx-auto mt-16"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
