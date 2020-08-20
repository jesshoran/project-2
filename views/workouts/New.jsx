const React = require('react');
// const Default = require('../components/Default.jsx');

class New extends React.Component {
    render() {
      return (
        
            <div>
                <h1>New Workout Page</h1>
                <form action="/workouts" method="POST">
                    Title: <input type="text" name="title"/><br/>
                    Entry: <input type="text" name="entry"/><br/>
                    Is Ship Broken: <input type="checkbox" name="shipIsBroken"/><br/>
                    <input type="submit" name="" value="Create New Log"/><br/>
                </form>
            </div>
           
        }
    }

  
  module.exports = New;