import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Index extends React.Component {

    constructor(props){
        super(props);
        console.log("propes Value:", props);
    }
    render() {
      console.log("propes Value:", this.props);
      return (
        
        <div>
          <h1>{this.props.name}</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>
          <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
      );
    }
  }