import React from 'react'
import '../styles/card.scss'
import Profile from './Profile'
import { ReactComponent as CardButton } from '../images/cardButton.svg'
import CardMenu from './CardMenu'
import Comment from './Comment'

const Card = (props) => {
    const { storyBorder, image, comments, likedByText, likedByNumber, hours } = props;
    return (
        <div className='card'>
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder} />
                <CardButton className='cardButton' />
            </header>
            <img className='cardImage' src={image} alt="card content" />
            <CardMenu />
            <div className='likedBy'>
                <Profile iconSize="small" hideAccountName={true} />
                <span>Like by <strong>{likedByText}</strong> and <strong>{likedByNumber} others</strong></span>
            </div>
            <div className='comments'>
                {comments.map((comment) => {
                    return (
                        <Comment 
                            key={comment.id}
                            accountName={comment.user}
                            comment={comment.text}
                        />
                    )
                })}
            </div>
            <div className='timePosted'>{hours} HOUR AGO</div>
            <div className='addComment'>
                <div className='commentText'>Add a comment...</div>
                <div className='postText'>POST</div>
            </div>
        </div>
    )
}

export default Card