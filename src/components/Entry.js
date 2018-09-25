import React from 'react';



const Entry = ({compound, quantity, timestamp}) => {
    const date = new Date(timestamp).toLocaleDateString();
    return (
      <tr>
        <td>{compound}</td>
        <td>{quantity}</td>
        <td>{date}</td>
      </tr>
    )
  };

  export default Entry;