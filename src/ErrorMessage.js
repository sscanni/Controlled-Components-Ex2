import React from 'react';

/*
This can be a Stateless Functional Component because this component just renders
the props that are passed to it. It's a good practice to make components that
are solely concerned with a component's presentation as opposed to a component's
logic (presentational components) into stateless functional components.
*/
const ErrorMessage = props => {
  return (
    <div>
      <p id="errorMsg" className={props.shouldHide ? 'hidden' : ''}>Error: User ID is already being used. Please enter a different User ID.</p>
  	</div>
  );
};

export default ErrorMessage;