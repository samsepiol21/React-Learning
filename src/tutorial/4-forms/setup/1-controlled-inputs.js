import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName && email) {
      // console.log('submit the form');
      // const person = { firstName: firstName, email: email };
      // shortcut, because the key name is the same:
      const person = { id: new Date().getTime().toString(), firstName, email };

      setPeople(people => {
        return [...people, person];
      });

      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  }

  return (
    <div className="container">
      <article>
        {/* either use form -> onSubmit 
        OR onclick for the submit button */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>

        {
          people.map((person) => {
            const { id, firstName, email } = person;

            return (
              <div className='item' key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            )
          })
        }

      </article>
    </div>
  );
};

export default ControlledInputs;
