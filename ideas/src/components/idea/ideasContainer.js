import React, { Component } from 'react';
import axios from 'axios';

class IdeasContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ideas: []
      }
    }

    componentDidMount() {
      axios.get('http://localhost:3001/api/v1/ideas').then(i => {
        return this.setState({ideas: i.data});
      }).catch(err => {
        console.log(err);
      });
    }

    render() {
        return (
          <div>
            {this.state.ideas.map(i => {
              return (
                <div key={i.id}>
                  <p>{i.body}</p>
                </div>
              )
            })}
          </div>
        );
    }
}

export default IdeasContainer;
