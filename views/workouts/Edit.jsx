const React = require('react');
const Default = require('../components/Default.jsx');

class Edit extends React.Component {
  render() {
    const { _id, name, type, music, image, when, description } = this.props.workout;
    const id = _id;
    return (
      <Default>
        <div className="container-changes">
          <form action={`/workouts/${id}/?_method=PUT`} method="POST">
            <div className="fieldset">
              <fieldset class="fieldset">
                <legend className="legend">Edit</legend>
                <label htmlFor="name">Name:</label><input type="text" name="name" id="name" defaultValue={name} /><br />
                <label htmlFor="type">Type:</label><input type="text" name="type" id="type" defaultValue={type} /><br />
                <label htmlFor="music">Music:</label><input type="text" name="music" id="music" defaultValue={music} /><br />
                <label htmlFor="image">Image:</label><input type="text" name="image" id="image" defaultValue={image} /><br />
                <label htmlFor="when">When:</label><input type="text" name="when" id="when" defaultValue={when} /><br />
                <label htmlFor="description">Description:</label><input type="text" name="description" id="description" defaultValue={description} /><br />
              </fieldset>
            </div>
            <input type="submit" value="Save Workout" />
          </form>
        </div>
      </Default>
    )
  }
}
module.exports = Edit;

