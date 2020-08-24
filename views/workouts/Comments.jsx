const React = require('react');
const Image = require('../components/Image.jsx');

class New extends React.Component {
    render() {
      return (
        <Image>
            <div className="container-changes">
                <h1>We want to hear what you think!!</h1>
                <fieldset>
                <legend className="legend2">Add a new comment here!</legend>
                <form action={`/workouts/${this.props.workout._id}/comment/?_method=PUT`} method="POST">
                  <label for="username">Username: </label><input type="text" name="username"/><br/>

                  {/* <div id="username-container"></div>
                    <br></br>
                    <div>
                      <button id="all-members"></button>
                    </div> */}


                  <label for="comment">Comment: </label><input type="text"  name="comment"/><br/>
                  <input type="submit" name="" value="Add a New Comment"/><br/>
                </form>
                </fieldset>
            </div>
          </Image>
      );       
    }
    
}

  
  module.exports = New;