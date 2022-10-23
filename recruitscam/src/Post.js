import React from 'react';

function Post({timestamp, title, description}) {
    return <div className="p-7">
        <div>
            <h4 className='font-semibold'>{title}</h4>
            <span className='text-gray-600'>
                {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            <p>{description}</p>
        </div>
    </div>
}

export default Post