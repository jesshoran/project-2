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
                <label for="type" className="select-label" >Type:</label><select name="type" id="type" form="type" className="select-box" style={{width: '300px'}}>
                  <option>HIIT</option>
                  <option>Strength</option>
                  <option>Body Sculpt</option>
                </select>
                <label for="music" className="select-label" id="music-word"
                >Music: </label><select name="music" className="select-box"  id="music-box" form="music" style={{width: '300px'}}>
                  <option>EDM</option>
                  <option>Hip Hop</option>
                  <option>Metal</option>
                  <option>Top 40</option>
                </select><br/>
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