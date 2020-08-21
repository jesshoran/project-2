const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
  render() {
    return (
        <Default>
        <div>
            <h1>Workouts</h1>
            <div className="container d-flex p-2 flex-wrap justify-content-around">
                {this.props.workouts.type.map((workout) => {
                        return (
                            <div className="card text-center" style={{
                                width: 300}} key={workout._id}>
                            <img className="card-img-top" style={{height:'200px'}} src={workout.image}/><br/>
                            <div className="card-body d-flex flex-column">
                            {/* <p className="card-title p-2">{workout.type}</p><br/> */}
                            <a className="p-2 align-items-end btn btn-secondary btn-sm" href={`/workouts/${workout._id}`}>Learn more</a>
                            {/* <form className="btn" action={`/workouts/${workout._id}?_method=DELETE`} method="POST">
                                <input type="submit" value={`DELETE`}/>
                            </form> */}
                            {/* <a href={`/workouts/${workout._id}/edit`}>Edit</a> */}
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