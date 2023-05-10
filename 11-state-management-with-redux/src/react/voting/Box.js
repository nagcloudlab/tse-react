import React from 'react'
import Item from './Item'
import Table from './Table'

export default function Box() {
    return (
        <div className=' card'>
            <div className='card-header'>Box</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <Item name="Foo" />
                    <Item name="Bar" />
                </div>
                <hr />
                <Table />
            </div>
        </div>
    )
}
