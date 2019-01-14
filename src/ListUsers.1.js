import React from 'react';

/*
This can be a Stateless Functional Component because this component just renders
the props that are passed to it. It's a good practice to make components that
are solely concerned with a component's presentation as opposed to a component's
logic (presentational components) into stateless functional components.
*/
const ListUsers = props => {
  return (
    <div>
      <hr></hr>
      <h2 className="items">Player List</h2>
      <button>Hide the Number of Games Played</button>
      <table className="item-list">
      <tbody>
       <tr>
        <th>User ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th className={props.shouldHideGames ? 'hidden' : ''}>Games Played</th>
       </tr>
        {props.items.map((item, index) => <tr key={index}>
            <td>{ item.userid }</td>
            <td>{ item.first }</td>
            <td>{ item.last }</td>
            <td className={props.shouldHideGames ? 'hidden' : ''}>{ item.games }</td>
        </tr>)}
        </tbody>
      </table>
  	</div>
  );
};

export default ListUsers;