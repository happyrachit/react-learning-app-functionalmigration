import React from 'react'

function TableHeader(props) {
    const {tableHeader} = props;
    return (
      <>
        <thead>
          <tr>
            {tableHeader.map((key, index) => {
              return (
                <th scope="col" key={index}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
      </>
    );
}

export default TableHeader
