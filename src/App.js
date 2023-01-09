import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaTruckLoading, FaDog } from 'react-icons/fa'
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

  const {company, dates, duties, title} = jobs[value]

  return <section>
    <div className='title'>
      <h2>expierence <FaDog/></h2>
      <div className='underline'></div>
    </div>
  </section>
}

export default App
