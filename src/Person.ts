type Person = {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;
  street: string;
  city: string;
  zipCode: string;
};

export default Person;

export type FormPerson = Omit<Person, 'id'>;
