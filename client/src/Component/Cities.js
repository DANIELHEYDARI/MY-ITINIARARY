import React, { Component } from 'react';
import "./Cities.css"
import Menu from './Menu'; 
import CitiesList from './CitiesList'
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
     
    },
  },
});





class Cities extends Component {
constructor(props){
  super(props);
  this.state={
    search:""
  }
}


  handleChange = (event) => {
    console.log("HOLA"); 
    console.log(event.target.value)
    this.setState({

      search: event.target.value.toUpperCase()
      
    })
}



  render() {
    console.log(this.props);
    const {classes} = this.props
    return (
     
        <div className="Cities">
          <Menu></Menu>
          <form className={classes.root+" form"} noValidate autoComplete="off">
           <TextField type="text" id="standard-basic" label="Standard"   onChange={this.handleChange}/>
          </form>
          
          <CitiesList search={this.state.search}></CitiesList>
        </div>
      
    );
  }
}

export default withStyles(useStyles)(Cities);


