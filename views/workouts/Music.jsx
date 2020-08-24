const React = require('react');
const Default = require('../components/Default.jsx');

class Music extends React.Component {
  render() {
    return (
        <Default>
        <div>
            <h1>All the best {this.props.workout.type} Workouts!</h1>
            <div className="container d-flex m-3 flex-wrap justify-content-around">
            {this.props.workout.map((musicWorkout) => {
                return(
            // <h1>{musicWorkout.music} Workouts</h1>
            
                <div className="card text-center" style={{
                        width: 250}}>
                    <img className="card-img-top" style={{height:'200px'}} src={musicWorkout.image}/><br/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title p-2">{musicWorkout.name}</h5>
                        <p className="card-title p-2">{musicWorkout.type}</p>
                        <a className="p-2 align-items-end btn btn-secondary btn-sm" href={`/workouts/${musicWorkout._id}`}>Check it out</a>
                    </div>
                </div>
            
            ) })}
            </div>
        </div>
    </Default>
    )   
  }
}

module.exports = Music;