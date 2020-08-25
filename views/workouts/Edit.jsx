const React = require('react');
const Image = require('../components/Image.jsx');

class Edit extends React.Component {
  render() {
    const { _id, name, type, music, image, when, description } = this.props.workout;
    const id = _id;
    return (
      <Image>
        <div className="container-changes">
          <h1>Edit the Workout</h1>
          <form action={`/workouts/${id}/?_method=PUT`} method="POST">
            <div className="fieldset">
              <fieldset className="fieldset">
                <legend className="legend2">Make any changes here</legend>
                <label htmlFor="name">Name:</label><input type="text" name="name" id="name" defaultValue={name} /><br />
                <label htmlFor="type">Type:</label><select name="type" id="type" defaultValue={type} className="select-box">
                    <option>Select Type</option>
                    <option>HIIT</option>
                    <option>Strength</option>
                    <option>Body-Sculpt</option>
                  </select><br />
                <label htmlFor="music">Music:</label><select name="music" defaultValue={music} className="select-box"  id="music-box" >
                    <option>Select Music</option>
                    <option>EDM</option>
                    <option>Hip-Hop</option>
                    <option>Metal</option>
                    <option>Top-40</option>
                  </select><br />
                <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /><br />
                <label htmlFor="when">When:</label><input type="text" name="when" id="when" defaultValue={when} /><br />
                <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} />
                <input type="submit" value="Save Workout" />
              </fieldset>
            </div>
          </form>
        </div>
      </Image>
    )
  }
}
module.exports = Edit;

