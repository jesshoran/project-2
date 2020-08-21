const React = require('react');
const Hp = require('./components/Hp.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Hp>
          <div>
            <header>
              <h1>Welcome to Beats Body!</h1>
              <h3>Bond with other music lovers and get fit doing it!</h3>
              </header>
              <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">Hello world is a community of travelers sharing their experiences, tips, and recommendations.</p>
                <p>Join us to create your very own travel profile and blog!</p>
                <a class="btn btn-primary" href="/workouts" role="button">Join our Community</a>
              </div>

            <a href="/workouts">Check out all the Workouts!</a><br/>
          </div>
          </Hp>
      );
    }
  }
  
  module.exports = Homepage;