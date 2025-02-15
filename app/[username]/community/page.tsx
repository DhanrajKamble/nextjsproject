import React from 'react'

const Community = ({params}: {params : {username : string}}) => {
    const {username} = params;
  return (
    <div>{username} Community</div>
  )
}

export default Community