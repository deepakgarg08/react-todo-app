import React from 'react'

const todos = ({ todos, deleteTodo, addTodo }) => {

    let todoList = todos.length ? (
        todos.map((todo) => {
            return (
                <div className="collection-item" key={todo.id} onClick={() => { deleteTodo(todo.id) }}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                    {/* <button onClick={() => { deleteTodo(todo.id) }}>Delete todo</button> */}

                </div>
            )
        })
    ) :
        (
            <p className="center">
                you have no todo's left
            </p>
        )


    return (

        <div className="todos collection">
            {todoList}

        </div>
    )
}

export default todos