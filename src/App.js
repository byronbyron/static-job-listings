import { useState, useEffect } from 'react';
import Header from './components/Header';
import JobCard from './components/JobCard';
import FilterItem from './components/FilterItem';
import ListingsData from './data/data.json';

export default function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if(filters.length == 0)
      setListings(ListingsData)
  }, [filters]);

  const filterListings = (filter_by = '') => {
    if (!filters.includes(filter_by) && filter_by !== '') {
      setFilters([...filters, filter_by]);

      setListings(listings.filter(listing => [
        listing.role,
        listing.level,
        ...listing.languages,
        ...listing.tools
      ].includes(filter_by)));
    }
  }

  const removeFilter = (removed_filter) => {
    setFilters(filters.filter(item => item !== removed_filter))
  }

  return (
    <div>
      <Header />

      <main className="container mx-auto px-6">
        {filters.length > 0 && (
          <div className="filter">
            {filters.map(filter => <FilterItem item={filter} _callback={removeFilter} key={filter} />)}
          </div>
        )}

        <div className="card-group">
          { listings.map( listing => <JobCard listing={listing} key={listing.id} filtering={filterListings} /> ) }
        </div>
      </main>
    </div>
  )
}
