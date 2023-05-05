import React, { Component } from 'react'


class DataTable extends Component {
    render() {
        let { value: todos, renderColumns, renderRows } = this.props
        return (
            <table className='table table-bordered'>
                <thead>
                    {renderColumns(todos)}
                </thead>
                <tbody>
                    {renderRows(todos)}
                </tbody>
            </table >
        )
    }
}


export default class RenderProps extends Component {
    render() {

        let todos = [
            { id: 1, title: 'todo 1', completed: false },
            { id: 2, title: 'todo 2', completed: false },
        ]

        let products = [
            { id: 1, name: 'p1', price: 100 },
            { id: 2, name: 'p2', price: 200 },
            { id: 3, name: 'p3', price: 300 },
        ]

        return (
            <div className='card'>
                <div className='card-header'>RenderProps</div>
                <div className='card-body'>
                    <DataTable
                        value={todos}
                        renderColumns={todos => {
                            return (
                                <tr>
                                    <th>id</th>
                                    <th>title</th>
                                    <th>completed</th>
                                </tr>
                            )
                        }}
                        renderRows={
                            todos => {
                                return todos.map(todo => {
                                    return (
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.title}</td>
                                            <td>{todo.completed ? 'yes' : 'no'}</td>
                                        </tr>
                                    )
                                })
                            }
                        }
                    />


                    <DataTable value={products}
                        renderColumns={
                            products => {
                                return (
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>price</th>
                                    </tr>
                                )
                            }
                        }
                        renderRows={
                            products => {
                                return products.map(product => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        }
                    />


                </div>
            </div>
        )
    }
}
