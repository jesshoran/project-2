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
              <div className="jumbotron">
                <h1 className="display-4">Come together through music!</h1>
                <p className="lead">Welcome to Beats Body! Motivate your workouts through good music and like-minded people.</p>
                <p>Join us to create your very own travel profile and blog!</p>
                <a className="btn btn-primary" href="/workouts" role="button">Join our Community</a>
              </div>

            <a href="/workouts">Check out all the Workouts!</a><br/>
          </div>
          </Hp>
      );
    }
  }
  
  module.exports = Homepage;