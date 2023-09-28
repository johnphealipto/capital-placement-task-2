import {
  CalendarIcon,
  ChevronRightIcon,
  FileIcon,
  HeartIcon,
  HomeIcon,
  NotebookIcon,
  SettingsIcon,
  ShareIcon,
  UserIcon,
} from "@/assets/icons";
import classNames from "classnames";
import { useState } from "react";

const NAV_ICONS = [
  <HomeIcon className="h-5 w-5" />,
  <UserIcon className="h-5 w-5" />,
  <CalendarIcon className="h-5 w-5" />,
  <ShareIcon className="h-5 w-5" />,
  <FileIcon className="h-5 w-5" />,
  <NotebookIcon className="h-5 w-5" />,
  <HeartIcon className="h-5 w-5" />,
  <ChevronRightIcon className="h-4 w-4" />,
];

const SideNavigation = () => {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div id="side-navigation">
      <div className="flex flex-col items-center gap-8">
        <div className="bg-[#D9D9D9] w-8 h-8 rounded-full" />
        <ul className="flex flex-col items-center gap-6">
          {NAV_ICONS.map((item, idx) => (
            <li
              key={idx}
              className={classNames(
                "p-[15px] rounded-lg text-dark cursor-pointer",
                {
                  "bg-[#E9EFFF] !text-blue": idx === activeNav,
                }
              )}
              onClick={() => setActiveNav(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-9">
        <SettingsIcon className="h-6 w-6" />
        <div className="bg-[#D7E5FD] w-8 h-8 flex rounded-full">
          <span className="text-[#B1CDFD] text-sm font-bold m-auto">AS</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
