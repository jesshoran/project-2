const React = require('react');
const Default = require('./components/Default.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <h1>Welcome to Beats Body!</h1>
              <h3>Bond with other music lovers and get fit doing it!</h3>
            <a href="/workouts">Check out all the Workouts!</a><br/>
          </div>
          </Default>)
          ;
    }
  }
  
  module.exports = Homepage;