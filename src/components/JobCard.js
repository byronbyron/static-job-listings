import React from 'react'
import Details from './Details'
import Image from './Image'

export default function JobCard({listing, filtering}) {
  return (
    <div className={`card ${listing.featured ? 'card-featured' : ''}`}>
      <Image url={listing.logo} desc={listing.company} />

      <Details
        company={listing.company}
        recent={listing.new}
        featured={listing.featured}
        position={listing.position}
        role={listing.role}
        level={listing.level}
        postedAt={listing.postedAt}
        contract={listing.contract}
        location={listing.location}
        languages={listing.languages}
        tools={listing.tools}
        filter_f={filtering}
      />
    </div>
  )
}
