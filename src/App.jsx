import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
        usersList: [
          {
            name: 'Edubells',
            age: 25,
            occupation: 'Gardener'
          },
          {
            name: 'Thomasito',
            age: 24,
            occupation: 'Sky Diver'  
          }
        ],
        user: {
          name: '',
          age: '',
          occupation: ''
        }
    };

    //this.handleAddUser2 = this.handleAddUser2.bind(this);
  }

  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {

    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
  }

  handleAddUser2(e) {
    let user = this.state.user;
    let usersList = [...this.state.usersList];

    usersList.push(user);

    this.setState({usersList : usersList});

    e.preventDefault();
  }

  deleteUser = rowIndex => {

    let usersList = [...this.state.usersList];

    usersList.splice(rowIndex, 1);

    this.setState({usersList: usersList});
  }

  render() {
    let usersList = this.state.usersList;

    return (
      <div className="App">

          <h1>FORMS APP</h1>

          <div className='forms-panel'>
            <form>
              Name: <br/> <input type="text" name="name" placeholder="Name" onChange={this.handleChangeInfo} /><br/>
              Age: <br/> <input type="text" name="age" placeholder="Age" onChange={this.handleChangeInfo} /><br/>
              Occupation: <br/> <input type="text" name="occupation" placeholder="Occupation" onChange={this.handleChangeInfo} /><br/>
              <br/>
              <button type="button" onClick={this.handleAddUser}>Add</button>
            </form>
          </div>

          <br/>

          <div className='table-panel'>
            <table className='user-table'>
              <thead>

              </thead>
              <tbody>
                <tr className='user-table-row'>
                    <th className='user-table-cell'>NAME</th>
                    <th className='user-table-cell'>AGE</th>
                    <th className='user-table-cell'>OCCUPATION</th>
                    <th className='user-table-cell'></th>
                </tr>
                {
                  usersList.map((user, index) =>{
                      return (
                        <tr className='user-table-row'>
                            <th className='user-table-cell'>{user.name}</th>
                            <th className='user-table-cell'>{user.age}</th>
                            <th className='user-table-cell'>{user.occupation}</th>
                            <th className='user-table-cell'><button type='button' onClick={() => this.deleteUser(index)}>Delete User</button></th>
                        </tr>
                      )
                  })
                }
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default App;
