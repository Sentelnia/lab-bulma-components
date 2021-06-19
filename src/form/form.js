/** @format */

import React from "react";
import "bulma/css/bulma.css";

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className="control">
        <input className= 'input'
        type={props.type}
        placeholder= {props.placeholder}
        />
        </div>
        </div>
    );
  };


class Form extends React.Component {
  render() {
    return (
    <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField  label="Email"type="email" placeholder="e.g. alexsmith@gmail.com" />
     
      </div>
    );
  }
}

export default Form;
