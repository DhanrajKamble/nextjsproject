import React from 'react'


// localhost:3000/Dhannu
// [username] = Dhannu
const ChannelPage = async ({ params }: { params: { username: string } }) => {
    const { username } = await Promise.resolve(params);
    console.log(username);
    return (
        <>
            <div className="text-3xl text-red-500 flex flex-col items-center justify-center h-screen ">
                <h1>{username}</h1>
                ChannelPage ❤️🤍❤️
            </div>
        </>
    )
}

export default ChannelPage