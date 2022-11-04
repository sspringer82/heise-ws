import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FormPerson } from '../Person';
import usePerson from '../usePerson';

type Props = {
  onSubmit: (person: FormPerson) => void;
};
const Form: React.FC<Props> = ({ onSubmit }) => {
  const { save, getPerson, fetchPerson } = usePerson();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormPerson>({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthdate: '',
      street: '',
      city: '',
      zipCode: '',
    },
  });

  useEffect(() => {
    if (id) {
      // const person = getPerson(parseInt(id, 10));
      // reset(person);
      fetchPerson(parseInt(id, 10)).then((person) => reset(person));
    }
  }, [id]);

  // function submitHandler(person: FormPerson) {
  //   save(person);
  //   resetAndGoToList();
  // }

  function resetAndGoToList() {
    reset();
    navigate('/list');
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div>
        <TextField
          label="Vorname:"
          variant="standard"
          InputLabelProps={{ shrink: !!getValues('firstName') }}
          inputProps={
            // @ts-ignore
            { 'data-testid': 'firstName' }
          }
          {...register('firstName', { required: 'firstname is required' })}
        />
        {errors.firstName && <div>{errors.firstName.message}</div>}
      </div>
      <div>
        <TextField
          label="Nachname:"
          variant="standard"
          InputLabelProps={{ shrink: !!getValues('lastName') }}
          {...register('lastName', {
            required: 'lastname is required',
            minLength: 2,
            maxLength: 10,
          })}
          inputProps={
            // @ts-ignore
            { 'data-testid': 'lastName' }
          }
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        {/* {errors.lastName && (
          <div style={{ color: 'red', fontWeight: 'bold' }}>
            This field is required
          </div>
        )} */}
      </div>
      <div>
        <TextField
          label="Geburtsdatum:"
          variant="standard"
          InputLabelProps={{ shrink: !!getValues('birthdate') }}
          {...register('birthdate')}
        />
      </div>
      <div>
        <TextField
          label="Straße:"
          variant="standard"
          InputLabelProps={{ shrink: !!getValues('street') }}
          {...register('street')}
        />
      </div>
      <div>
        <TextField
          label="Stadt:"
          variant="standard"
          InputLabelProps={{ shrink: !!getValues('city') }}
          {...register('city')}
        />
      </div>
      <div>
        <TextField
          label="PLZ:"
          variant="standard"
          InputLabelProps={{ shrink: !!getValues('zipCode') }}
          {...register('zipCode')}
        />
      </div>
      <div>
        <button type="submit" data-testid="submit">
          speichern
        </button>
        <button type="reset" onClick={resetAndGoToList}>
          abbrechen
        </button>
      </div>
    </form>
  );
};

export default Form;
