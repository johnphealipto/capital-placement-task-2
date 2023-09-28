import {
  CaretDownIcon,
  EnvelopeIcon,
  TagIcon,
  UserCheckIcon,
  UserCloseIcon,
  UserVoiceIcon,
} from "@/assets/icons";
import CustomButton from "@/components/CustomButton";
import classNames from "classnames";
import { useState } from "react";

const ACTIONS = [
  <TagIcon />,
  <UserCloseIcon />,
  <UserCheckIcon />,
  <UserVoiceIcon />,
  <EnvelopeIcon />,
];

const OPPORTUNITY_BROWSING = [
  { name: "Applied", count: 1745 },
  { name: "Shortlisted", count: 453 },
  { name: "Technical Interview", count: 123 },
  { name: "Opportunity Browsing", count: 243 },
  { name: "Video Interview I", count: 25 },
  { name: "Video Interview II", count: 25 },
  { name: "Video Interview III", count: 25 },
  { name: "Offer", count: 25 },
  { name: "Withdrawn", count: 25 },
];

const TopNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="main-grid mb-10">
      <div>
        <p className="text-blue text-xl font-bold">London Internship Program</p>
        <p className="text-sm">London</p>
      </div>
      <div className="flex justify-between gap-4">
        <div className="relative">
          <div
            className="bg-white w-[321px] py-2 px-4 flex justify-between items-center cursor-pointer rounded-2xl shadow-[0_4px_25px_0_rgba(29,78,216,.05)]"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="text-blue font-semibold">
              Opportunity Browsing
            </span>{" "}
            <CaretDownIcon />
          </div>
          <div
            className={classNames(
              "bg-white absolute w-full h-0 top-3/4 rounded-b-2xl overflow-hidden shadow-[0_4px_25px_0_rgba(29,78,216,.05)] transition-all duration-100 z-50",
              { "!h-fit !top-full": isActive }
            )}
          >
            {OPPORTUNITY_BROWSING.map((item, idx) => (
              <div
                key={idx}
                className={classNames(
                  "flex justify-between items-center px-4 py-5 border-b border-[#EAEBEE]",
                  { "!border-b-0": idx === OPPORTUNITY_BROWSING.length - 1 }
                )}
              >
                <span>{item.name}</span>
                <div className="text-sm bg-[#F8F8F8] text-[#444444] px-2 py-1 rounded-2xl">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            {ACTIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white w-10 h-10 flex border border-solid border-[#ECECEC] rounded-lg"
              >
                <span className="m-auto">{item}</span>
              </div>
            ))}
          </div>
          <CustomButton text="Move To Video Interview I" />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
