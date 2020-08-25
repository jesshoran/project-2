const React = require('react');
const Image = require('./components/Image.jsx');

class About extends React.Component {
    render() {
      return (
        <Image>
          <div>


            {/* How It Works */}

            <div className="container-changes-show">
            <h1>About Beats Body</h1>
                <fieldset>
                <legend className="legend2">Check out how it works below!</legend>
              <br/>
              <div className="row" style={{color: 'black'}}>
                <div className="col-lg-12 about-divs">
                  <img src="/images/icon-signup.png" className="about-icon workout-icon" alt="" width="150" height="150"/>
                  <p>Become a Member and join our community!</p>
                </div>
                <hr class="featurette-divider"></hr>

                <div class="col-lg-12 about-divs">
                  <img src="/images/icon-music-2.png" className="about-icon" alt="" width="150" height="150"/>
                  <p>Choose your favorite workout music</p>
                </div>  
                <hr class="featurette-divider"></hr>

                <div class="col-lg-12 about-divs">
                  <img src="/images/icon-workout.png" className="about-icon workout-icon" alt="" width="150" height="150"/>
                  <p>Select a workout that FITS your workout goals. </p>
                </div>  
                <hr class="featurette-divider"></hr>

                <div class="col-lg-12 about-divs">
                  <img src="/images/icon-comment.png" className="about-icon" alt="" width="150" height="150"/>
                  <p>Drop a comment in the workout you want to do, and the instructor will post the Zoom link 10 minutes prior.</p>
                </div>
                <hr class="featurette-divider"></hr>
                
                <div class="col-lg-12">
                  <img src="/images/icon-buddies.png" className="about-icon" alt="" width="150" height="150"/>
                  <p>Meet like-minded people and get fit!</p>
                </div>


           </div>



           {/* <p>All workout info goes here, maybe a how it works</p> */}

           </fieldset>
        </div>
       
        </div>
      </Image>
      );
    }
  }
  
  module.exports = About;