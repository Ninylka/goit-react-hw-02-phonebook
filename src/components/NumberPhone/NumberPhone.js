//   import { InputPhonebookNumber } from '../FormContacts/FormContacts.styled'
// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

//  export class NumberPhone extends Component {
//   state = {
     
//     number: '',
//   };

//   handleChange = (evt) => {
//     this.setState({ number: evt.target.value });
//   };

//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     const { number } = this.state;


//     if (number.trim() === '') {
//       alert('Number is required!');
//       return;
//     }

//     const contact = {
//       id: nanoid(),
//       number,
//     };

//     this.props.onAddNumber(contact);

//     this.setState({ number: '' });
//   };

//   render() {
//     const { number } = this.state;

//     return (
      
//         <label>
//           Number
       
//         <InputPhonebookNumber id="number" type="tel" name="number" value={number} onChange={this.handleChange} required />
    
//         </label>
//     );
//   }
// }
import { InputPhonebookNumber } from '../FormContacts/FormContacts.styled'
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class NumberPhone extends Component {
  state = {
    number: '',
  };

  handleChange = (evt) => {
    this.setState({ number: evt.target.value });
  };

//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     const { number } = this.state;

//     if (number.trim() === '') {
//       alert('Number is required!');
//       return;
//     }

//     const contact = {
//       id: nanoid(),
//       number,
//     };

 
//     this.props.onAddNumber(contact);

//     this.setState({ number: '' });
//   };

  handleAddNumber = () => {
    const { number } = this.state;
    this.props.onAddNumber(number);
    this.setState({ number: '' });
  };


  render() {
    const { number } = this.state;

    return (
    //   <div onSubmit={this.handleSubmit}>
        <label>
          Number
          <InputPhonebookNumber
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        // </div>
     
    );
  }
}