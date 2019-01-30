import React from 'react';
import ChartItem from './ChartItem.js';

const ChartList = (props) => {
  console.log(props);
  const songNodes = props.songs.map((songObject, index) => {
    return(
    <ChartItem
    title={songObject.title.label}
    key={index}
    />
    )
  })
  return (
    <ul>{songNodes}</ul>
  )
}





export default ChartList;
