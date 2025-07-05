import React from 'react'


const InstallComponent = ({ datas }) => {
  return (
    <div className="install-list">
      <h2>Install:</h2>
      <ul>
        {datas.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  )
}

export default InstallComponent