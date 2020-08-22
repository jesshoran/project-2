const React = require('react');
const Default = require('./components/Default.jsx');

class Homepage extends React.Component {
    render() {
      return (
        <Default>
          <div>
            {/* <header> */}
              {/* <h1>Welcome to Beats Body!</h1>
              <h3>Bond with other music lovers and get fit doing it!</h3> */}
              {/* </header>
              <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-interval="5000">
                    <img src="..." className="d-block w-100" alt="first"></img>
                  </div>
                  <div className="carousel-item" data-interval="2000">
                    <img src="..." className="d-block w-100" alt="second"></img>
                  </div>
                  <div class="carousel-item">
                    <img src="..." className="d-block w-100" alt="third"></img>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div> */}
              <div className="jumbotron">
                <h1 className="display-4">Welcome to Beats Body!</h1>
                <p className="lead">Bond with other music lovers and get fit doing it!</p>
                <p>Join us to create your very own travel profile and blog!</p>
                <a className="btn btn-primary" href="/workouts" role="button">Join our Community</a>
              </div>

              <div className="row">
                <div className="col-lg-3">
                  <img src="https://image.shutterstock.com/image-vector/music-notes-background-colorful-gclef-260nw-626501552.jpg" alt="" width="100" height="100"/>
                  <h2>Electronic</h2>
                  <p>Stuff about electronic</p>
                  <p><a class="btn btn-secondary" href="/workouts/edm" role="button">Seel all EDM Workouts &rArr;</a></p>
                </div>

                <div class="col-lg-3">
                  <img src="https://image.shutterstock.com/image-vector/music-notes-background-colorful-gclef-260nw-626501552.jpg" alt="" width="100" height="100"/>
                  <h2>Hip Hop</h2>
                  <p>Stuff about electronic</p>
                  <p><a class="btn btn-secondary" href="/workouts/hiphop" role="button">Seel all EDM Workouts &rArr;</a></p>
                </div>  
                
                <div class="col-lg-3">
                  <img src="https://image.shutterstock.com/image-vector/music-notes-background-colorful-gclef-260nw-626501552.jpg" alt="" width="100" height="100"/>
                  <h2>Metal</h2>
                  <p>Stuff about Metal</p>
                  <p><a class="btn btn-secondary" href="/workouts/metal" role="button">Seel all EDM Workouts &rArr;</a></p>
                </div>

                <div class="col-lg-3">
                  <img src="https://image.shutterstock.com/image-vector/music-notes-background-colorful-gclef-260nw-626501552.jpg" alt="" width="100" height="100"/>
                  <h2>Top 40</h2>
                  <p>Stuff about Top 40</p>
                  <p><a class="btn btn-secondary" href="/workouts/top40" role="button">Seel all EDM Workouts &rArr;</a></p>
                </div>
           </div>
        </div>
      </Default>
      );
    }
  }
  
  module.exports = Homepage;