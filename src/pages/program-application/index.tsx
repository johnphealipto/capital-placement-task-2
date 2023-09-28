import Candidates from "./components/Candidates";
import Filters from "./components/Filters";

const ProgramApplication = () => {
  return (
    <div className="main-grid">
      <Filters />
      <Candidates />
    </div>
  );
};

export default ProgramApplication;
