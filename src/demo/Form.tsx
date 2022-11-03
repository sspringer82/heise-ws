import React, { ChangeEvent, FormEvent, useState } from 'react';

type Person = {
  name: string;
  age: number;
};

const initialPerson = {
  name: '',
  age: 0,
};

const Form: React.FC = () => {
  const [person, setPerson] = useState<Person>(initialPerson);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(person);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // validierung
    if (
      event.target.name === 'age' &&
      isNaN(parseInt(event.target.value, 10))
    ) {
      alert('you fool, only numbers are allowed');
    }

    setPerson((prevPerson) => ({
      ...prevPerson,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={person.name}
          onChange={handleChange}
          name="name"
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          value={person.age}
          onChange={handleChange}
          name="age"
        />
      </label>

      <button type="submit">speichern</button>
    </form>
  );
};

export default Form;
