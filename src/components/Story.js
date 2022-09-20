import React from 'react'
import '../styles/story.scss'
import users from '../data/users'
import ProfileIcon from './ProfileIcon'

const Story = () => {
    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if (accountName.length > 10) {
        accountName = accountName.substring(1, 10) + "...";
    }

    return (
        <div className='story'>
            <ProfileIcon iconSize="big" storyBorder={true} />
            <span className='accountName'>{accountName}</span>
        </div>
    )
}

export default Story