import CheckBox from "@/components/CheckBox";
import classNames from "classnames";

const INFO = [
  { name: "Qualified" },
  { name: "Task", count: 25 },
  { name: "Disqualified", count: 78 },
];

const Candidates = ({ data }) => {
  return (
    <div className="bg-white px-5 rounded-2xl">
      <div className="flex items-center justify-between py-4 border-b border-[#EAEBEE]">
        <div className="flex gap-6 items-center">
          <CheckBox />
          <span className="text-blue font-bold">{data.length} Candidates</span>
        </div>
        <div className="flex gap-7">
          {INFO.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span
                className={classNames("text-sm", { "text-blue": idx === 0 })}
              >
                {item.name}
              </span>
              {item.count ? (
                <div className="text-xs flex bg-[#F8F8F8] text-[#444444] w-7 h-7 rounded-2xl">
                  <span className="m-auto">{item.count}</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-6 py-4 border-b border-[#EAEBEE]"
        >
          <CheckBox />
          <div className="bg-[#EDF4FF] text-[#D0E1FF] text-xl w-14 h-14 flex justify-center items-center rounded-full">
            AS
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="text-base font-bold">{item.name}</p>
            <p className="font-bold">{item.location}</p>
            <p>{item.education}</p>
            <p className="text-blue">#top_candidate #top_candidate</p>
            <div className="flex gap-2">
              {["New York", "Marketing", "London"].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F3FAFC] text-[#037092] text-xs py-1 px-3 rounded-full"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Candidates;
