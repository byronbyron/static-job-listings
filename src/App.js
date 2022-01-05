import { useState, useEffect } from 'react';
import Header from './components/Header';
import Job from './components/Job';
import FilterItem from './components/FilterItem';
import data from './data/data.json';

export default function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setListings(data)
  }, []);

  const filterFunc = ({role, level, languages, tools}) => {
    if (filters.length === 0) return true;

    const tags = [role, level];

    if (tools) tags.push(...tools);
    if (languages) tags.push(...languages);
    
    return filters.every(tag => tags.includes(tag));
  }

  const filterListings = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  }

  const removeFromFilter = (itemToRemove) => {
    setFilters(filters.filter((item) => item !== itemToRemove));
  }

  const clearAll = () => {
    setFilters([]);
  }

  const filteredJobs = listings.filter(filterFunc);

  return (
    <div>
      <Header />

      <main className="container mx-auto px-6">
        {filters.length > 0 && (
          <div className="filter">
            <div className="flex-1 mr-auto">
              {filters.map(filter => <FilterItem item={filter} _callback={removeFromFilter} key={filter} />)}
            </div>

            <button className="filter-clear" onClick={() => clearAll()}>Clear</button>
          </div>
        )}

        <div className="card-group">
          { filteredJobs.map( listing => <Job listing={listing} key={listing.id} filtering={filterListings} /> ) }
        </div>
      </main>
    </div>
  )
}
