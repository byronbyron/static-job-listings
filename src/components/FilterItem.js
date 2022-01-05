import React from 'react';

export default function FilterItem({item, _callback}) {
  const removeFilter = () => {
    _callback(item)
  }

  return (
    <button className="tag filter-tag" onClick={() => removeFilter()}>
      {item}
    </button>
  )
}
