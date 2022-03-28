import React from 'react'

const Job = (shows) => {
    const{
    company,
    featured,
    contract,
   
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
    } = shows.data;
    let keywords = [role,level,...languages,...tools];
  return (
    <div className='job-container'>
        <div className='logo'>
        <img src={logo} alt =''/>
        </div>
        <div className='part1'>
            <div className='company'>
                <div className='cname'>{company}</div>
                {shows.data.new && <span className='new'> new </span> }
                {shows.data.featured && <span className='"featured'>featured </span> }
            </div>
            <div className='position'> {position}</div>
            <div className='details'>
                <span>{postedAt}</span>
                <span>{contract}</span>
                <span>{location}</span>
            </div>
        </div>
    <div className='part2'>
        {keywords.map((i => {  }))}

    </div>
    </div>
    );
};

export default Job