const React = require('react');
const Default = require('../components/Default.jsx');

class Index extends React.Component {
  render() {
    return (
        <Default>
        <div>
            <h1>Members</h1>
            <div className="container d-flex m-3 flex-wrap justify-content-around">
                {this.props.members.map((member) => {
                        return (
                            <div className="card text-center m-2 workcard" style={{
                                width: 250}} key={member._id}>
                                <img className="card-img-top" style={{height:'250px'}} src={member.pic}/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-title">{member.username}</p>
                                    <p className="card-title">{member.email}</p>
                                    {/* <form className="btn" style={{width: 50}} className="delete-button" action={`/members/${_id}?_method=DELETE`} method="POST"></form> */}
                                </div>
                            </div>
                    )
                        })}
            </div>
        </div> 
    </Default>
    )   
  }
}

module.exports = Index;