import Candidates from "./components/Candidates";
import Filters from "./components/Filters";
import useProgramApplication from "./hooks/useProgramApplication";

const ProgramApplication = () => {
  const { candidates, handleFilter } = useProgramApplication();

  return (
    <div className="main-grid">
      <Filters handleFilter={handleFilter} />
      <Candidates data={candidates} />
    </div>
  );
};

export default ProgramApplication;
