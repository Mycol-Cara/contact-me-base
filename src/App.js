import React from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Form from "reactstrap/es/Form";
import './index.js';
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";

export default class App extends Component {
  state={ };
  inputElement = React.createRef();

   constructor() {
    super();
     this.state = {
       formControls: {
         id: {
           value:''
         },
         name: {
           value:''
         },
         address1: {
           value:''
         },
         address2: {
           value:''
         },
         suburb: {
           value:''
         },
         state: {
           value:''
         },
         country: {
           value:''
         },
         email: {
           value:''
         },
         phone: {
           value:''
         },
         mobile: {
           value:''
         },
       },
       items: [] ,
       currentItem: {
         name: '',
         address1: '',
         address2: '',
         suburb:'',
         state:'',
         country:'',
         email:'',
         phone:'',
         mobile:'',
       },


     }
  } // End of constructor

  addItem = (event) => {
    event.preventDefault()
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      // use spread operator to insert new item at (end) of the list
      const newListOfItems = [...this.state.items, newItem];
      this.setState({
        items: newListOfItems,
        currentItem: {text: '', name:'', address1:'', address2:'', suburb:'', state: '', country:'', email:'',
          phone:'', mobile:''},

      })
    }
    console.log(this.state.items)
  };
  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formControls: {
        ...this.state.formControls, [name]: {
          ...this.state.formControls[name], value
        }
      }
    });

  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    })
  };
  createTasks = item => {
    return (
        <li
            key={item.name}
            onClick={
              () => this.deleteItem(item.name)
            }
        >

          {item.name}
        </li>
    )
  };

render()
  {
    const todoItems = this.state.items;
    const listItems = todoItems.map(this.createTasks);
    return (
        <div className="App">
          <header className="App-header">
            <h1> Contact me </h1>
          </header>

        <div className="Contact">
          
            <Col xs="12" sm="3">
              <h2> this is contact 1</h2>
              <h2> this is contact 2</h2>
            </Col>

        </div>

        <div className="todoForm">
          <form onSubmit={this.addItem}>
          <Row>
            <h2> Contact Form </h2>
            <Col xs="12" sm="3">
              <Label>Name </Label>
              <Input type="text" placeholder=" First name"
                     value={this.state.formControls.name.value}
                     name="name"
                     onChange={ this.handleInput}
                     // value={ this.currentItem.name}
                     // ref={ this.inputElement }


              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label>Address 1 </Label>
              <Input type="text" placeholder=" First Address"
                     name="address1"
                     value={this.state.formControls.address1.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label>Address 2 </Label>
              <Input type="text" placeholder=" Second Address"
                     name="address2"
                     value={this.state.formControls.address2.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label>Suburb </Label>
              <Input type="text" placeholder=" Suburb"
                     name="suburb"
                     value={this.state.formControls.suburb.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label>State </Label>
              <Input type="text" placeholder=" State"
                     name="state"
                     value={this.state.formControls.state.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label> Country</Label>
              <Input type="text" placeholder="Country"
                     name="country"
                     value={this.state.formControls.country.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label> Email </Label>
              <Input type="text" placeholder="Email"
                     name="email"
                     value={this.state.formControls.email.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label> Phone </Label>
              <Input type="text" placeholder="Phone"
                     name="phone"
                     value={this.state.formControls.phone.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="3">
              <Label> Mobile </Label>
              <Input type="text" placeholder="Mobile"
                     name="mobile"
                     value={this.state.formControls.mobile.value}
                     onChange={this.handleInput}
              />
            </Col>
          </Row>

      <button className="SaveBtn"> Save </button>
      <button className="CancelBtn"> Cancel </button>
          </form>
          <Col>
            <h2> Show List Of To DOs</h2>
            <Row className= "theList">
              <ul>
                {listItems}

              </ul>
            </Row>
          </Col>

          <footer>
            <Row>

            </Row>
            <h3> Footer is Here </h3>
          </footer>
        </div>
        </div>
    );
  }
}