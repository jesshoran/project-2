const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
  render() {
    return (
        <Default>
        <div>
            <h1>Workouts</h1>
            <div className="container d-flex p-2 flex-wrap justify-content-around">
                {this.props.workouts.map((workout, id) => {
                        return (
                            <div className="card text-center" style={{
                                width: 250}} key={workout._id}>
                                <img className="card-img-top" style={{height:'200px'}} src={workout.image}/>
                                <a className="align-items-end btn btn-secondary btn-sm" href={`/workouts/${workout._id}`}>Learn More &rArr;</a>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{workout.name}</h5>
                                    <p className="card-title">{workout.type}/{workout.music}</p>
                                    {/* <a className="align-items-end btn btn-secondary btn-sm" href={`/workouts/${workout._id}`}>Learn More &rArr;</a> */}
                                </div>
                            </div>
                    )
                        })}
            </div>
        </div> 
    </Default>
    )   
  }
}

module.exports = Index;