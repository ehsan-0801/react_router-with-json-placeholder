import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, username } = props.friend
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <div>
                <h3>Name : { name }</h3>
                <button onClick={ showFriendDetail }>{ username } id:{ id }</button>
            </div>
        </div>
    );
};

export default Friend;