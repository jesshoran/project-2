const React = require('react');
const Default = require('../components/Default.jsx');

class New extends React.Component {
    render() {
      return (
        <Default>
            <div className="container-changes">
                <h1>We are always adding new workouts!!</h1>
                <fieldset>
                <legend className="legend2">Add a new one here!</legend>
                <form action="/workouts" method="POST">
                <label for="name">Name: </label><input type="text"  name="name"/><br/>
                <label for="type">Type:</label><input type="text" name="type"/><br/>
                <label for="music">Music: </label><input type="text" name="music"/><br/>
                <label for="image">Image:</label><input type="text" name="image"/><br/>
                <label for="description">Description:</label><input type="text" name="description"/><br/>
                <label for="when">When:</label><input type="text" name="when"/><br/>
                    
                    <input type="submit" name="" value="Create New Workout"/><br/>
                </form>
                </fieldset>
            </div>
          </Default>
      );       
    }
    
}

  
  module.exports = New;