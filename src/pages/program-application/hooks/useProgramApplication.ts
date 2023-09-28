import { useState } from "react";

const CANDIDATES = [
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
  },
  {
    name: "John Doe",
    location: "Bostom, USA",
    education: "Bachelor - MIT (2023 - 2023)",
  },
  {
    name: "Thomas Matt",
    location: "Edinburgh, UK",
    education: "Bachelor - Harvard University (2023 - 2023)",
  },
  {
    name: "Kamilia Smith",
    location: "London, UK",
    education: "Bachelor - Boston University (2023 - 2023)",
  },
  {
    name: "Roy Jade",
    location: "Cambridge,  UK",
    education: "Bachelor - Yale (2023 - 2023)",
  },
  {
    name: "Ahmed Salman",
    location: "New York, USA",
    education: "Bachelor - Cambridge University (2023 - 2023)",
  },
];

export default () => {
  const [candidates, setCandidates] = useState([...CANDIDATES]);

  const handleFilter = (input) => {
    const inputToUse = input.toLowerCase();
    setCandidates(() => {
      const data = CANDIDATES.filter(
        (item) =>
          item.name.toLowerCase().includes(inputToUse) ||
          item.education.toLowerCase().includes(inputToUse) ||
          item.location.toLowerCase().includes(inputToUse)
      );
      return data;
    });
  };

  return { candidates, handleFilter };
};
