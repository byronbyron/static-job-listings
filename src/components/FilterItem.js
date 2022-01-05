import React from 'react';

export default function FilterItem({item, _callback}) {
  const removeFilter = () => {
    _callback(item)
  }

  return (
    <button className="text-xs p-2 bg-white rounded cursor-pointer mr-2" onClick={() => removeFilter()}>
      {item}
    </button>
  )
}
