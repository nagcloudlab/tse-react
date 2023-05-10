import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Item({ name }) {
    const votingLines = useSelector(state => state.votingLines);
    const votingLine = votingLines[name] || { likes: 0, dislikes: 0 };
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='display-4'>{name}</div>
                <hr />
                <span>{votingLine.likes - votingLine.dislikes}</span>
                <hr />
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-lg btn-success' onClick={e => dispatch({ type: "LIKE", payload: { itemName: name } })}>Like</button>
                    <button className='btn btn-lg btn-danger' onClick={e => dispatch({ type: "DISLIKE", payload: { itemName: name } })}>Dislike</button>
                </div>
            </div>
        </div>
    )
}