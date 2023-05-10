import React from 'react'
import { useSelector } from 'react-redux'

export default function Table() {
    const votingLines = useSelector(state => state.votingLines)
    return (
        <div className=' card'>
            <div className='card-header'>Table</div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Likes</th>
                            <th>Dislikes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(votingLines).map((itemName, idx) => (
                                <tr key={idx}>
                                    <td>{itemName}</td>
                                    <td>{votingLines[itemName].likes}</td>
                                    <td>{votingLines[itemName].dislikes}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}
