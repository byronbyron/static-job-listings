import React from 'react';

export default function Image({ url, desc='' }) {
  return (
    <div className="card-image">
      <img src={url} alt={desc} width="88" height="88" />
    </div>
  )
}
