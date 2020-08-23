const React = require('react');
const Default = require('../components/Default.jsx');

class Music extends React.Component {
  render() {
    return (
        <Default>
        <div>
            {this.props.workout.map((musicWorkout) => {
                return(
            // <h1>{musicWorkout.music} Workouts</h1>
            <div className="container d-flex p-2 flex-wrap justify-content-around">
                <div className="card text-center" style={{
                        width: 300}}>
                    <img className="card-img-top" style={{height:'200px'}} src=""/><br/>
                    <div className="card-body d-flex flex-column">
                    <p className="card-title p-2">{musicWorkout.name}</p><br/>
                    <p className="card-title p-2">{musicWorkout.type}</p><br/>
                    <a className="p-2 align-items-end btn btn-secondary btn-sm" href={`/workouts/${musicWorkout._id}`}>Check it out</a>
                    </div>
                </div>
            </div>
            ) })}
        </div>
    </Default>
    )   
  }
}

module.exports = Music;