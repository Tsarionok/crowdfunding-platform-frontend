import React from 'react';

export const useFormData = (fields) => {
  const initialState = fields.reduce(
    (p, c) => ({ ...p, [c.name]: { ...c } }),
    {}
  );
  const [state, setState] = React.useState(initialState);

  const onChangeValue = React.useCallback((event) => {
    setState((previousState) => ({
      ...previousState,
      [event.target.name]: {
        ...previousState[event.target.name],
        value: event.target.value
      }
    }));
  }, []);

  const onSubmitForm = React.useCallback(() => {
    Object.keys(state).forEach((key) => {
      setState((previousState) => ({
        ...previousState,
        [key]: { ...previousState[key], value: "" }
      }));
    });
  }, [state]);

  return {
    fields: Object.keys(state).reduce((p, key) => [...p, state[key]], []),
    onChangeFields: onChangeValue,
    onSubmitForm
  };
};
