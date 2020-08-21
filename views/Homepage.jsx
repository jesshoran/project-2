const React = require('react');
const Default = require('./components/Default.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <h1>Welcome to the homepage!</h1>
            <a href="/workouts">Check out all the Workouts!</a><br/>
          </div>
          </Default>)
          ;
    }
  }
  
  module.exports = Homepage;