import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';





const PrintHello = () => {
  return (
    <h1>I love React</h1>
  )
};

class PrintHelllo extends React.Component {
  render () {
      return  <h1>I am a React Component</h1>
    }
  };


  class JumbotronComp extends React.Component {

    render (props) {
      return(
        JumbotronComp.propTypes = {
          title: PropTypes.string,
          description: PropTypes.string,
          buttonUrl: PropTypes.string,
          buttonLabel: PropTypes.string
        },
      <div class="p-5 bg-light">
          <h1 class="mb-3">{this.props.title}</h1>
          <h4 class="mb-3">{this.props.description}</h4>
          <a class="btn btn-primary" href={this.props.buttonUrl} role="button">{this.props.buttonLabel}</a>
      </div>
    )
    }
  };

  const BootstrapCard = (props) => {

    BootstrapCard.propTypes = {
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      buttonLabel: PropTypes.string,
      buttonUrl: PropTypes.string,
      description: PropTypes.string
    };

    return (
      <div className="card m-5" style={{width: '30rem'}}>
  <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
  </div>
</div>
    )
  }


class App extends React.Component {
    constructor(props) {
      super(props)
    }




render () {
  return (
<>
      <PrintHello />
      <PrintHelllo />
      <BootstrapCard title="Paul Mccartney" />
      <BootstrapCard title="Bob Dylan"
      description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades."
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg"
      buttonLabel="Go to Wikipedia"
      buttonUrl="https://en.wikipedia.org/wiki/Paul_McCartney"
      />
      <JumbotronComp title="Welcome to React" description="React is the most popular rendering library in the World" buttonUrl="https://reactjs.org/" buttonLabel="Go to official Website"/>
</>
  );
  }
}
export default App;
