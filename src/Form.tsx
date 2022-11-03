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
      <button type="submit">speichern</button>
      <button type="reset" onClick={() => setPerson(initialPerson)}>
        abbrechen
      </button>
    </form>
  );
};

export default Form;
