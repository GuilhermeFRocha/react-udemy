import './App.css';
import { Component } from 'react';

class App extends Component {

   state = {
    posts: [
      {
        Id:1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        Id:2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        Id:3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      },
    ]
    }

    componentDidMount () {}

  render () {
    const{posts} = this.state;

    return (
      <div className="App">
        {posts.map((itens) => (
          <>
          <h1> {itens.title}</h1>
          <p>{itens.body}</p>
          </>
          ))}
      </div>
    )
  }
}

export default App;
