const React = require('react');
const Default = require('../components/Default.jsx');

class Show extends React.Component {
    render() {
        const {_id, name, type, music, image, when, description} = this.props.workout;
        return (
            <Default>
            <div>

                <h1>{name}</h1>
                <p>Type: {type} </p>
                <p>Music: {music}</p>
                <img src={image} alt=""/>
                <p>When: {when}</p>
                <p>Description: {description}</p> 
                <a className="btn btn-info" href={`/workouts/${_id}/edit`}>Edit This Workout</a>
                <br/>
                <form className="btn-warning" style={{width: 250}} action={`/workouts/${_id}?_method=DELETE`} method="POST">
                <input type="submit" value={`DELETE`}/></form> 
                <br/>
                <a className="btn btn-secondary" href="/workouts">Back to All Workouts</a>
   
            </div>
            </Default>
        )
    }
}

module.exports = Show;