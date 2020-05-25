import React from 'react';

class AddTodo extends React.Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content" />
                    <input type="text" id="content" onChange={this.handleChange} value = {this.state.content}></input>
                    {/* <button>AddTodo</button> */}
                </form>
            </div>


        )
    }
}

export default AddTodo




