import React, { ChangeEvent, FormEvent, useState } from 'react';
import Person, { FormPerson } from './Person';

const initialPerson: FormPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipCode: '',
};

type Props = {
  onSubmit: (person: FormPerson) => void;
};

const Form: React.FC<Props> = ({ onSubmit }) => {
  const [person, setPerson] = useState<FormPerson>(initialPerson);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(person);
    setPerson(initialPerson);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vorname:
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Nachname:
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Geburtsdatum:
        <input
          type="text"
          name="birthdate"
          value={person.birthdate}
          onChange={handleChange}
        />
      </label>
      <label>
        Straße:
        <input
          type="text"
          name="street"
          value={person.street}
          onChange={handleChange}
        />
      </label>
      <label>
        Stadt:
        <input
          type="text"
          name="city"
          value={person.city}
          onChange={handleChange}
        />
      </label>
      <label>
        PLZ:
        <input
          type="text"
          name="zipCode"
          value={person.zipCode}
          onChange={handleChange}
        />
      </label>
      <button type="submit">speichern</button>
      <button type="reset" onClick={() => setPerson(initialPerson)}>
        abbrechen
      </button>
    </form>
  );
};

export default Form;
