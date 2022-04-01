import React from 'react'

export default function MyBlogs(props) {

    return (
        <div className='row w-100' style={{ border: 'solid 1px black', margin: '15px auto' }}>
            <div className='Myblog-titel'>
                <h3>{props.blog.titel}</h3>
            </div>
            <div className='Myblog-time'>
                <p>{props.blog.time}</p>
            </div>
            <div className='Myblog-discription'>
                <p>
                    {props.blog.discription}
                </p>
            </div>

        </div>
    )
}