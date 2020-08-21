const React = require("react");

class Hp extends React.Component {
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
        <body
          style={{
            fontFamily: "'Montserrat', sans-serif",
            textAlign: "center"
          }}
        >
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Beats Body Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/workouts"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Workouts
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/workouts">
                  All Workouts
                </a>
                <a className="dropdown-item" href="/workouts/new">
                  Add a New workout
                </a>
                {/* <a className="dropdown-item" href="#">Something else here</a> */}
                {/* <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a> */}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/members">
                Members
              </a>
            </li>
            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
          </ul>
        
          {this.props.children}
          <footer></footer>
        </body>
      </html>
    );
  }
}
module.exports = Hp;