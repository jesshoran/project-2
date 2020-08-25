const React = require('react');
const Default = require('../components/Default.jsx');

class Music extends React.Component {
  render() {
      const workout = this.props.workout
    return (
        <Default>
        <div>
            
            <h1 className="index-h1">{workout[0].music} Workouts!</h1>
            <div className="container d-flex m-3 flex-wrap justify-content-around">
            {this.props.workout.map((musicWorkout) => {
                return(
            
                    
                <div className="card text-center m-2 workcard" style={{
                        width: 300}}>
                    <img className="card-img-top" style={{height:'200px'}} src={musicWorkout.image}/>
                    <a className="btn btn-secondary btn-sm" href={`/workouts/${musicWorkout._id}`}>Learn More &rArr;</a>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{musicWorkout.name}</h5>
                        <p className="card-title">{musicWorkout.type}</p>
                        
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