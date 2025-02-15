import React from 'react'

const PostId = async ({params}:{params:{username:string, postId:number}}) => {
    const {username, postId} = await Promise.resolve(params);
    console.log(await Promise.resolve(params));
  return (
    <div>
        <h1>{username}</h1>
        <h1>{postId}</h1>
        
        PostId </div>
  )
}

export default PostId