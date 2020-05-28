 import React from 'react';
  
  export function FilterList(list, maximunValue, minimunValue, productName) 
  {
  let deltaList = list;
  if (maximunValue !== "")
    deltaList = list.filter(
      produto => produto.value < maximunValue
    );

  if (minimunValue !== "")
    deltaList = deltaList.filter(
      produto => produto.value > minimunValue
    );

  if (productName !== "")
    deltaList = deltaList.filter(
      produto => produto.name === productName
    );

  return deltaList;
}

function compare(a, b) 
{
  const valueA = a.value;
  const valueB = b.value;

  let comparison = 0;
  if (valueA > valueB) {
  comparison = 1;
  } else if (valueA < valueB) {
  comparison = -1;
  }
  return comparison;
  }

export function SortList(list, order)
{
  let deltaList = list;

  deltaList.sort(compare);

  return order === "0" ? deltaList : deltaList.reverse();
}


function Filters(props)
{ 
  return (
      <div>
      </div>
  );
}

export default Filters;