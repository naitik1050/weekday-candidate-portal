import React, { useState, useEffect, useCallback } from "react";
import MultiselectWithChips from "./component/MultiselectWithChips";
import {
  Experience,
  MinBaseSalary,
  Remote,
  Roles,
  TechStack,
} from "./helper/constant";
import DropdownWithChips from "./component/DropdownWithChips";
import "./App.css";
import InputField from "./component/InputField";
import { useDispatch, useSelector } from "react-redux";
import { fetchListRequest } from "./redux/actions";
import JobCard from "./component/JobCard";

const App = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.list);
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState({
    experience: "",
    companyName: "",
    location: "",
    remote: [],
    techStack: [],
    roles: [],
    minBaseSalary: "",
  });

  const fetchData = useCallback(() => {
    dispatch(fetchListRequest({ limit, offset }));
  }, [dispatch, limit, offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setOffset((prevOffset) => prevOffset + 10);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading && offset === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleFilterChange = (field, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [field]: value,
    }));
  };

  const filteredList = list?.filter((job) => {
    return (
      (filter.experience === "" || job.minExp >= parseInt(filter.experience)) &&
      (filter.companyName === "" ||
        job.companyName
          .toLowerCase()
          .includes(filter.companyName.toLowerCase())) &&
      (filter.location === "" ||
        job.location.toLowerCase().includes(filter.location.toLowerCase())) &&
      (!filter.remote.length ||
        (filter.remote.includes("Onsite") &&
          !job.location.toLowerCase().includes("remote")) ||
        filter.remote.some((status) =>
          job.location.toLowerCase().includes(status.toLowerCase())
        )) &&
      // (!filter.techStack.length ||
      //   filter.techStack.every((stack) => job.techStack.includes(stack))) &&
      (!filter.roles.length ||
        filter.roles.some((role) =>
          job.jobRole.toLowerCase().includes(role.toLowerCase())
        )) &&
      (filter.minBaseSalary === "" ||
        job.minJdSalary >= parseInt(filter.minBaseSalary))
    );
  });

  return (
    <div className="appContainer">
      <h1 className="title">Weekday Candidate Portal</h1>
      <div className="dropdownContainer">
        <DropdownWithChips
          name="Min Experience"
          data={Experience}
          value={filter.experience}
          onChange={(value) => handleFilterChange("experience", value)}
        />
        <InputField
          label="Company Name"
          value={filter.companyName}
          onChange={(value) => handleFilterChange("companyName", value)}
        />
        <InputField
          label="Location"
          value={filter.location}
          onChange={(value) => handleFilterChange("location", value)}
        />
        <MultiselectWithChips
          name="Remote"
          data={Remote}
          value={filter.remote}
          onChange={(value) => handleFilterChange("remote", value)}
        />
        <MultiselectWithChips
          name="Tech Stack"
          data={TechStack}
          value={filter.techStack}
          onChange={(value) => handleFilterChange("techStack", value)}
        />
        <MultiselectWithChips
          name="Roles"
          data={Roles}
          value={filter.roles}
          onChange={(value) => handleFilterChange("roles", value)}
        />
        <DropdownWithChips
          name="Min Base Pay (USD)"
          data={MinBaseSalary}
          value={filter.minBaseSalary}
          onChange={(value) => handleFilterChange("minBaseSalary", value)}
        />
      </div>
      <div className="job-list-container">
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <JobCard key={index} jobData={item} />
          ))
        ) : (
          <div>No matching records found.</div>
        )}
      </div>
      {loading && offset !== 0 && <div>Loading more...</div>}
    </div>
  );
};

export default App;
