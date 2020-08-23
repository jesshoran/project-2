const React = require('react');
const Image = require('../components/Image.jsx');

class New extends React.Component {
    render() {
      return (
        <Image>
            <div className="container-changes">
                <h1>We are always adding new workouts!</h1>
                <fieldset>
                <legend className="legend2">Add a new one here!</legend>
                <form action="/workouts" method="POST">
                  <label for="name">Name: </label><input type="text"  name="name"/><br/>
                  <div className="form-group"><label for="type" className="select-label" >Type:</label><select name="type" id="type" className="select-box">
                    <option>Select Type</option>
                    <option>HIIT</option>
                    <option>Strength</option>
                    <option>Body-Sculpt</option>
                  </select>
                  </div>
                  <div className="form-group">
                  <label for="music" className="select-label" id="music-word"
                  >Music: </label><select name="music" className="select-box"  id="music-box" >
                    <option>Select Music</option>
                    <option>EDM</option>
                    <option>Hip-Hop</option>
                    <option>Metal</option>
                    <option>Top-40</option>
                  </select>
                  </div>
                  <label for="image">Image:</label><input type="text" name="image"/><br/>
                  <label for="description">Description:</label><input type="text" name="description"/><br/>
                  <label for="when">When:</label><input type="text" name="when"/><br/>
                      
                      <input type="submit" name="" value="Create New Workout"/><br/>
                </form>
                </fieldset>
            </div>
          </Image>
      );       
    }
    
}

  
  module.exports = New;