const React = require('react');
// const Default = require('../components/Default.jsx');

class New extends React.Component {
    render() {
      return (
        
            <div>
                <h1>New Workout Page</h1>
                <form action="/workouts" method="POST">
                    Name: <input type="text" name="name"/><br/>
                    Type: <input type="text" name="type"/><br/>
                    Music: <input type="text" name="music"/><br/>
                    Image: <input type="text" name="image"/><br/>
                    When: <input type="text" name="when"/><br/>
                    Description: <input type="text" name="description"/><br/>
                    
                    <input type="submit" name="" value="Create New Log"/><br/>
                </form>
            </div>
      );       
    }
    
}

  
  module.exports = New;