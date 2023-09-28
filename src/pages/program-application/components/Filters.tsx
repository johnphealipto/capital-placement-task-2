import { Input } from "antd";
import { CaretDownIcon, FileIcon, SearchIcon, WarnIcon } from "@/assets/icons";
import classNames from "classnames";

const FILTERS = [
  "Personal Information",
  "Education",
  "Work Experience",
  "Activity Filter",
  "Advanced Filter",
];

const Filters = () => {
  return (
    <div className="flex flex-col gap-6">
      <Input
        size="large"
        placeholder="Serach by name, edu, exp or #tag"
        prefix={<SearchIcon />}
        suffix={<WarnIcon />}
      />
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between py-5 px-4 border-b border-[#EAEBEE]">
          <span className="font-bold">Filters</span>
          <span>0 Selected</span>
        </div>
        {FILTERS.map((item, idx) => (
          <div
            key={idx}
            className={classNames(
              "flex items-center justify-between py-5 px-4 border-b border-[#EAEBEE]",
              { "!border-b-0": idx === FILTERS.length - 1 }
            )}
          >
            <div className="flex items-center gap-2">
              <FileIcon className="h-4 w-4" />
              {item}
            </div>
            {idx !== FILTERS.length - 1 ? <CaretDownIcon /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
