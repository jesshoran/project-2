const React = require('react');
const Default = require('./components/Default.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Default>
          <div>
              <div className="jumbotron">
                <h1 className="display-4">Welcome to Beats Body!</h1>
                <p className="lead">Bond with other music lovers and get fit doing it!</p>
                <p>Start working out with other music lovers today!</p>
                <a className="btn btn-primary" href="/members/new" role="button">Join our Community</a>
              </div>
              <h3>Select Your Favorite Music to Get Started</h3>
              <br/>
              <div className="row" style={{color: 'black'}}>
                <div className="col-lg-3 col-md-6">
                  <img src="/images/edm.png" alt="" width="100" height="100"/>
                  <h2>Electronic</h2>
                  <p><a class="btn btn-secondary" href="/workouts/edm" role="button">EDM Workouts &rArr;</a></p>
                </div>

                <div class="col-lg-3 col-md-6">
                  <img src="/images/boom3.png" alt="" width="100" height="100"/>
                  <h2>Hip Hop</h2>
                  <p><a class="btn btn-secondary" href="/workouts/hiphop" role="button">Hip Hop Workouts &rArr;</a></p>
                </div>  
                
                <div class="col-lg-3 col-md-6">
                  <img src="/images/metal.png" alt="" width="100" height="100"/>
                  <h2>Metal</h2>
                  <p><a class="btn btn-secondary" href="/workouts/metal" role="button">Metal Workouts &rArr;</a></p>
                </div>

                <div class="col-lg-3 col-md-6">
                  <img src="/images/top40.jpg" alt="" width="100" height="100"/>
                  <h2>Top 40</h2>
                  <p><a class="btn btn-secondary" href="/workouts/top40" role="button">Top 40 Workouts &rArr;</a></p>
                </div>
           </div>

           <hr class="featurette-divider"></hr>

           <p>All workout info goes here, maybe a how it works</p>


        </div>
      </Default>
      );
    }
  }
  
  module.exports = Homepage;