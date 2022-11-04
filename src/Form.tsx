import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FormPerson } from './Person';
import usePerson from './usePerson';

const Form: React.FC = () => {
  const { handleAdd, getPerson, fetchPerson } = usePerson();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPerson>();

  useEffect(() => {
    if (id) {
      // const person = getPerson(parseInt(id, 10));
      // reset(person);
      fetchPerson(parseInt(id, 10)).then((person) => reset(person));
    }
  }, [id]);

  function submitHandler(person: FormPerson) {
    handleAdd(person);
    resetAndGoToList();
  }

  function resetAndGoToList() {
    reset();
    navigate('/list');
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>
          Vorname:
          <input
            type="text"
            {...register('firstName', { required: 'firstname is required' })}
          />
        </label>
        {errors.firstName && <div>{errors.firstName.message}</div>}
      </div>
      <div>
        <TextField
          label="Nachname:"
          variant="standard"
          {...register('lastName', {
            required: 'lastname is required',
            minLength: 2,
            maxLength: 10,
          })}
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
        <label>
          Geburtsdatum:
          <input type="text" {...register('birthdate')} />
        </label>
      </div>
      <div>
        <label>
          Straße:
          <input type="text" {...register('street')} />
        </label>
      </div>
      <div>
        <label>
          Stadt:
          <input type="text" {...register('city')} />
        </label>
      </div>
      <div>
        <label>
          PLZ:
          <input type="text" {...register('zipCode')} />
        </label>
      </div>
      <div>
        <button type="submit">speichern</button>
        <button type="reset" onClick={resetAndGoToList}>
          abbrechen
        </button>
      </div>
    </form>
  );
};

export default Form;
