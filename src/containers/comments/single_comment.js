import React from 'react';
import {Link} from 'react-router-dom'

let str = 'Fate/Grand Order is a turn-based tactical RPG. The player takes the role of "Master" and commands a group of individuals called "Servants," who are typically historical, literary, and mythological figures from various cultures. The player commands a party composed of up to 6 Servants in each battle, 3 active members and 3 reserve members. In each turn, the player is given a set of 5 Command Cards and may use up to 3 of them to attack.'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }



class SingleComment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      let i = getRandomInt(1, 4);
    return (
        <li className="comment-item">
            <article>
                <header className="comment-item__header">
                    <figure className="comment-item__user-avatar">
                        <img 
                            className="comment-item__user-avatar_image"
                            src={`/static/images/test_ava${i}.jpg`}
                            alt={`Author ${i} Ava`}
                        />
                    </figure>
                    <address className="comment-item__address">
                        By
                        <Link to="#"> 
                            {` Author ${i}`}
                        </Link>
                    </address>
                    
                    <time className="comment-item__time">
                        Friday, 5th April 2019, 08:15:00
                    </time>
                </header>
                <div className="comment-item__body">
                    <p>
                        {str+str}
                    </p>
                </div>
            </article>
        </li>
    );
  }

};

export default SingleComment;