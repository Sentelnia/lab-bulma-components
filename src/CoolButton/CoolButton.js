/** @format */

import React from "react";
import "bulma/css/bulma.css";







class CoolButton extends React.Component {
    render() {
      let finalClass = 'button ' + this.props.className

      // si prop isSmall => ajouter is-small 
      if(this.props.isSmall){
        finalClass+=' is-small'
      }
      if(this.props.isDanger){
          finalClass+= ' is-danger'

      }
      if(this.props.isSuccess){
          finalClass += ' is-success'

      }



      return (
      
         <button className={finalClass}>button1</button>
         
      );
    }
  }




export default CoolButton;
