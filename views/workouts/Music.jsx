const React = require('react');
const Default = require('../components/Default.jsx');

class Music extends React.Component {
  render() {
    const {_id, name, type, music, image, when, description} = this.props.workout;
    return (
        <Default>
        <div>
            <h1>EDM workouts</h1>
            <div className="container d-flex p-2 flex-wrap justify-content-around">
                        return (
                            <div className="card text-center" style={{
                                width: 300}}>
                            <img className="card-img-top" style={{height:'200px'}} src={workout.image}/><br/>
                            <div className="card-body d-flex flex-column">
                            <p className="card-title p-2">{workout.name}</p><br/>
                            <p className="card-title p-2">{workout.type}</p><br/>
                            <a className="p-2 align-items-end btn btn-secondary btn-sm" href={`/workouts/${workout._id}`}>Check it out</a>

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

module.exports = Music;