const React = require('react');
// const Default = require('../components/Default.jsx');

class Edit extends React.Component {
 render(){
    const {_id, name, type, music, image, when, description} = this.props.workout;
    const id = _id;
   return (
     <div>
         <form action={`/workouts/${id}/?_method=PUT`} method="POST">
         <label htmlFor="name">Name:</label><input type="text" name="name" id="name" defaultValue={name}/><br/>
         <label htmlFor="type">Type:</label><input type="type" name="type" id="type"defaultValue={type}/><br/>  
         <label htmlFor="music">Music:</label><input type="music" name="music" id="music" defaultValue={music}/><br/>
         <label htmlFor="image">Image:</label><input type="image" name="image" id="image" defaultValue={image}/><br/>
         <label htmlFor="when">When:</label><input type="when" name="when" id="when" defaultValue={when}/><br/>
         <label htmlFor="description">Description:</label><input type="description" name="description" id="description" defaultValue={description}/><br/>
         <input type="submit" value="Edit Workout"/>
         </form>
     </div>
   )
 }
}
module.exports = Edit;

