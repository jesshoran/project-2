const React = require('react');
// const Default = require('../components/Default.jsx');

class Show extends React.Component {
    render() {
        const {_id, name, type, music, image, when, description} = this.props.workout;
        return (
      
            <div>
                <h1>Learn More about {name}</h1>
                <p>Type: {type} </p>
                <p>Music: {music}</p>
                <p>Image: {image}</p>
                <p>When: {when}</p>
                <p>Description: {description}</p> 
                <a className="btn btn-info" href={`/workouts/${_id}/edit`}>Edit This Workout</a>
                <form className="btn" action={`/workouts/${_id}?_method=DELETE`} method="POST">
                <input type="submit" value={`DELETE`}/></form>        
            </div>
     
        )
    }
}

module.exports = Show;