const React = require("react");

class Image extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          ></link>
          <link rel="stylesheet" href="/css/style.css"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"
            defer
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
            crossorigin="anonymous"
            defer
          ></script>
          <title></title>
        </head>
        <body className="body-image" >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Beats Body <img className="logo" src="/images/run-music.png" alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home </a>
              </li>
              <li claclassNamess="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/workouts" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Workouts
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/workouts">All workouts</a>
                  <a className="dropdown-item" href="/workouts/new">Add a workout</a>

                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Music
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/workouts/edm">Electronic</a>
                  <a className="dropdown-item" href="/workouts/hiphop">Hip Hop</a>
                  <a className="dropdown-item" href="/workouts/metal">Metal</a>
                  <a className="dropdown-item" href="/workouts/top40">Top 40</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Members
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/members/new">Become a member</a>
                  <a className="dropdown-item" href="/members">See all our members</a>
                  {/* <a class="dropdown-item" href="/workouts/metal">Metal</a>
                  <a class="dropdown-item" href="/workouts/top40">Top 40</a> */}
                </div>
              </li>
            </ul>
          </div>
        </nav>
        
          {this.props.children}
          <footer></footer>
        </body>
      </html>
    );
  }
}
module.exports = Image;