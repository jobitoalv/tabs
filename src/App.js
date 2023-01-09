import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaTruckLoading } from 'react-icons/fa'
import { GrGremlin } from "react-icons/gr";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading){
    return (
    <section className='section loading'>
      <h1>loading<FaTruckLoading/></h1>
    </section>
    );
  }

  return <h2>tabs project setup<GrGremlin/></h2>
}

export default App
