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
      <p className="items">Items</p>
      <table className="item-list">
      <tbody>
       <tr>
        <th>User ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Games Played</th>
       </tr>
        {props.items.map((item, index) => <tr key={index}>
            <td>{ item.userid }</td>
            <td>{ item.first }</td>
            <td>{ item.last }</td>
            <td>{ item.games }</td>
        </tr>)}
        </tbody>
      </table>
  	</div>
  );
};

export default ListUsers;