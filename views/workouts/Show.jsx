const React = require('react');
const Image = require('../components/Image.jsx');
const { disconnect } = require('mongoose');

class Show extends React.Component {
    render() {
        const {_id, name, type, music, image, when, description, comments} = this.props.workout;
        // const {username, comment} = this.props.comment
        return (
            <Image>
            <div className="show=page-div"> 
              <form className="btn" style={{width: 100}} className="delete-button" action={`/workouts/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value={`DELETE`}/></form> 

                <a className="show-edit" href={`/workouts/${_id}/edit`}>Edit Workout</a>
                <a className="btn btn-small back" href="/workouts">&#8647; Back to All Workouts</a>
               
                <div className = "container-changes-show">

                    <h1>{name}</h1>
                    <p>Type: {type} </p>
                    <p>Music: {music}</p>
                    <img style={{width: 300}} src={image} alt={image}/>
                    <p>When: {when}</p>
                    <p>Description: {description}</p> 
                        <br/>

                    <br/>
                    
                    {/* <h4>Comments</h4> */}
                    <a className="btn btn-info" href={`/workouts/${_id}/comment`}>Add a comment</a>
                    
                <   div className="comment-section container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                            Username
                            </div>
                            <div class="col-sm-6">
                            Comment
                            </div>
                        </div>
                    </div>



                     {this.props.workout.comments.map((comment) => {
                         return (
                        <div className="container-fluid comments-body">    
                            <div class="row">
                            <div class="col-sm-6">
                            {comment.username}
                            </div>
                            <div class="col-sm-6">
                            {comment.comment}
                            </div>
                        </div>
                    </div>
                         )
                     })}
                </div>
                
   
            </div>
            
        </Image>
        )
    }
}

module.exports = Show;