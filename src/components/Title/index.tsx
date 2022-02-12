import React, { Component } from 'react';

export default class Title extends Component {

  componentDidMount() {
    const defaultTitle = "Personal Blog";

    const { name } = this.props;

    document.title = `${defaultTitle} - ${name}`;
  }
  render() {
    return(<></>);
  }
}
