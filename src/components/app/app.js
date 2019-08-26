import React, { Component } from "react";
import CardList from "../card-list";
import Service from "../../service/service";

import './app.css'

export default class App extends Component {
  service = new Service();

  componentDidMount() {
    this.loadCard();
  }

  state = {
    data: this.service._getTransformData(),
    sections: [
      {
        name: "course",
        visible: true
      },
      {
        name: "test",
        visible: true
      },
      {
        name: "training",
        visible: true
      },
      {
        name: "post-training",
        visible: true
      }
    ],

    loading: true
  };

  loadCard = () => {
    this.setState({
      data: this.service._getTransformData(),
      loading: false
    });
  };

  render() {
    const { data, sections, loading } = this.state;
    return <CardList items={data} sections={sections}/>;
  }
}
