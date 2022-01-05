import React from 'react';

export default function Details({
  company,
  recent,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  filter_f
}) {
  function handleFilter(skill) {
    filter_f(skill);
  }

  const Skills = ({skill}) => (
    <button className="tag" onClick={() => handleFilter(skill)}>
      {skill}
    </button>
  );

  return (
    <>
      <div className="card-body">
        <p className="text-sm font-bold text-cyan flex items-center mb-2">
          <span className="mr-4">{company}</span>
          { recent ? <span className="tag-pill bg-cyan">New!</span> : null }
          { featured ? <span className="tag-pill bg-dark-cyan">Featured</span> : null }
        </p>
        <h2 className="card-title">
          <a href="/">{position}</a>
        </h2>
        <div className="card-meta">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="tags">
        { [role, level, ...languages, ...tools].map(skill => <Skills skill={skill} key={skill} />) }
      </div>
    </>
  )
}
