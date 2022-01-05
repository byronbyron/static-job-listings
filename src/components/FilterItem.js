import React from 'react';

export default function FilterItem({item, callback}) {
  return (
    <button className="text-xs p-2 bg-white rounded cursor-pointer mr-2">
      {item}
    </button>
  )
}
