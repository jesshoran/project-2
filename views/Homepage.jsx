const React = require('react');
const Default = require('./components/Default.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Default>
          <div>
            {/* {/* Jumbotron */}
              <div className="jumbotron">
                <h1 className="display-4">Welcome to Beats Body!</h1>
                <p className="lead">Bond with other music lovers and get fit doing it!</p>
                <p>Start working out with other music lovers today!</p>
                <a className="btn btn-primary jumbo-blue" href="/members/new" role="button">Join our Community</a>
                <br></br>
                <p>Or, check out all of our amazing workouts!</p>
                <a className="btn btn-dark" href="/workouts" role="button">View All Workouts</a>
              </div> 


              {/* Music Section */}
              <h3>Select Your Favorite Music to Get Started</h3>
              <br/>
              <div className="row" style={{color: 'black'}}>
                <div className="col-lg-3 col-md-6 edm">
                  <img src="/images/edm.png" alt="" width="100" height="100"/>
                  <h2>Electronic</h2>
                  <p><a class="btn btn-success" href="/workouts/edm" role="button">EDM Workouts &rArr;</a></p>
                </div>

                <div class="col-lg-3 col-md-6 hiphop">
                  <img src="/images/boom3.png" alt="" width="100" height="100"/>
                  <h2>Hip Hop</h2>
                  <p><a class="btn btn-danger" href="/workouts/hiphop" role="button">Hip Hop Workouts &rArr;</a></p>
                </div>  
                
                <div class="col-lg-3 col-md-6">
                  <img src="/images/metal.png" alt="" width="100" height="100"/>
                  <h2>Metal</h2>
                  <p><a class="btn btn-warning" href="/workouts/metal" role="button">Metal Workouts &rArr;</a></p>
                </div>

                <div class="col-lg-3 col-md-6">
                  <img src="/images/top40.jpg" alt="" width="100" height="100"/>
                  <h2>Top 40</h2>
                  <p><a class="btn btn-info" href="/workouts/top40" role="button">Top 40 Workouts &rArr;</a></p>
                </div>
           </div>


            {/* How It Works */}
            {/* <h1>How It Works</h1>
              <br/>
              <div className="row" style={{color: 'black'}}>
                <div className="col-lg-3">
                  <img src="/images/male-signup.png" alt="" width="150" height="150"/>
                  <p>Become a Member and join our community!</p>
                </div>

                <div class="col-lg-3">
                  <img src="/images/color-music.jpg" alt="" width="150" height="150"/>
                  <p>Choose your favorite workout music</p>
                </div>  

                <div class="col-lg-3">
                  <img src="/images/pullup.png" alt="" width="150" height="150"/>
                  <p>Select a workout that FITS your workout goals</p>
                </div>  
                
                <div class="col-lg-3">
                  <img src="/images/buddies.jpeg" alt="" width="150" height="150"/>
                  <p>Meet like-minded people and get fit!</p>
                </div>

           </div> */}


           <hr class="featurette-divider"></hr>

           {/* <p>All workout info goes here, maybe a how it works</p> */}


        </div>
      </Default>
      );
    }
  }
  
  module.exports = Homepage;