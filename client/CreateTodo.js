import React, {Component} from 'react'

export default class CreateTodo extends Component {
  constructor () {
    super()
    this.state = {
      taskName: '',
      assignee: ''
      
    }
  }
  

  handleSubmit =(event)=>{
    event.preventDefault()
    console.log(this.state)
    this.setState =({
      taskName: '',
      assignee: ''

    })
    console.log(this.state.assignee)
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor ='taskName'>Task Name:</label>
        <input name ='taskName' type ='text' value={this.state.taskName} onChange={this.handleChange}/>
        <label htmlFor='assignee'>Assign To:</label>
        <input name ='assignee' type ='text' value={this.state.assignee} onChange={this.handleChange}/>
        <button type ='submit'>Submit</button>
      </form>
    )
  }
}
