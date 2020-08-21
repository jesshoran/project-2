const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/style.css"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
                    
                        <title></title>
                </head>
                <body style= {{
                    textAlign: 'center',
                    }}>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Beats Body Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/workouts" role="button" aria-haspopup="true" aria-expanded="false">Workouts</a>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">All Workouts</a>
                                <a className="dropdown-item" href="#">Add a New workout</a>
                                {/* <a className="dropdown-item" href="#">Something else here</a> */}
                                {/* <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a> */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Music (for example)</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                            </ul>

                        {/* //backup nav 
                    <h1 className="text-center" ></h1>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/">Home</a>
                        <li className="nav-item"></li>
                            <a className="nav-link" href="/workouts">Workouts</a>
                    </ul> */}
                    {this.props.children}
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}
module.exports = Default;