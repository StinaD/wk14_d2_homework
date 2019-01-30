import React from 'react';

const ChartItem = (props) => {
  console.log("chartitem props", props);
  return (
    <li>{props.title}</li>
  );
}


export default ChartItem;
