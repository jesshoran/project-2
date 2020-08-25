const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
  render() {
    return (
        <Default>
        <div>
            <h1 className="index-h1">All Workouts</h1>
{/* 
            Mini-Nav */}
        
            <div className="row" style={{color: 'black'}}>
                <div className="col-lg-3 col-md-6 btn-sm">
                  <p><a class="btn btn-info" href="/workouts/edm" role="button">EDM</a></p>
                </div>

                <div className="col-lg-3 col-md-6 btn-sm">
                  <p><a className="btn btn-info" href="/workouts/hiphop" role="button">Hip Hop</a></p>
                </div>  
                
                <div className="col-lg-3 col-md-6 btn-sm">
                  <p><a className="btn btn-info" href="/workouts/metal" role="button">Metal</a></p>
                </div>

                <div className="col-lg-3 col-md-6 btn-sm">
                  <p><a className="btn btn-info" href="/workouts/top40" role="button">Top 40</a></p>
                </div>
                
                {/* Content */}

           </div>
            <div className="container d-flex m-3 flex-wrap justify-content-around">
                {this.props.workouts.map((workout, id) => {
                        return (
                            <div className="card text-center m-2 workcard" style={{
                                width: 300}} key={workout._id}>
                                <img className="card-img-top" style={{height:'200px'}} src={workout.image}/>
                                <a className="btn btn-secondary btn-sm" href={`/workouts/${workout._id}`}>Learn More &rArr;</a>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{workout.name}</h5>
                                    <p className="card-title">{workout.type}/{workout.music}</p>
                                    {/* <a className="align-items-end btn btn-secondary btn-sm" href={`/workouts/${workout._id}`}>Learn More &rArr;</a> */}
                                </div>
                            </div>
                    )
                        })}
            </div>
            <a className="btn btn-info" href={`/workouts/new`}>Add a New Workout!</a><br></br>
        </div> 
    </Default>
    )   
  }
}

module.exports = Index;