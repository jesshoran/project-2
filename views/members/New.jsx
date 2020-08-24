const React = require('react');
const Image = require('../components/Image.jsx');

class New extends React.Component {
    render() {
      return (
        <Image>
            <div className="container-changes">
                <h1>Become a member today!</h1>
                <fieldset>
                <legend className="legend2">Get started below</legend>
                <form action="/members" method="POST">
                  <label for="username">Username: </label><input type="text"  name="username"/><br/>
                  <label for="name">Name: </label><input type="text"  name="name"/><br/>
                  <label for="email">Email: </label><input type="text"  name="email"/><br/>
                  <label for="pic">Picture: </label><input type="text"  name="pic"/><br/>
                      
                      <input type="submit" name="" value="Join Now!"/><br/>
                </form>
                </fieldset>
            </div>
          </Image>
      );       
    }
    
}

  
  module.exports = New;