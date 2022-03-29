import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  console.log(data);
  const [filteredData, setfilteredData] = useState([]);



  const modifiedData = () => {
      if (keywords) {
      const newData = data.filter((dat) => {
        return keywords.every((key) => {
          return (
            dat.role === key ||
            dat.level === key ||
            dat.languages.includes(key) ||
            dat.tools.includes(key)
          );
        });
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
 
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((dat) => {
        return <Job key={dat.id} data={dat} setkeywords={setKeywords} />;
      })}
    </div>
  );
};

export default Jobs;