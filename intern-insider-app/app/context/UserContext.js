import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  const saveJob = (job) => {
    setSavedJobs((prevJobs) => [...prevJobs, job]);
  };

  const removeJob = (job) => {
    setSavedJobs((prevJobs) => prevJobs.filter((j) => j.id !== job.id));
  };

  return (
    <UserContext.Provider value={{ savedJobs, saveJob, removeJob }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
