import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormPerson } from './Person';

type Props = {
  onSubmit: (person: FormPerson) => void;
};

const Form: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPerson>();

  return (
    <form
      onSubmit={handleSubmit((person: FormPerson) => {
        onSubmit(person);
        reset();
      })}
    >
      <div>
        <label>
          Vorname:
          <input type="text" {...register('firstName', { required: true })} />
        </label>
        {errors.firstName && <div>This field is required</div>}
      </div>
      <div>
        <TextField
          label="Nachname:"
          variant="standard"
          {...register('lastName', {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
          error={!!errors.lastName}
        />

        {errors.lastName && (
          <div style={{ color: 'red', fontWeight: 'bold' }}>
            This field is required
          </div>
        )}
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
        <button
          type="reset"
          onClick={() => {
            reset();
          }}
        >
          abbrechen
        </button>
      </div>
    </form>
  );
};

export default Form;
