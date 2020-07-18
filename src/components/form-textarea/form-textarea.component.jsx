import React from 'react';

import {
  GroupContainer,
  FormTextareaContainer,
  FormTextareaLabel
} from './form-textarea.styles';

const FormTextarea = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormTextareaContainer onChange={handleChange} {...props} />
    {label ? (
      <FormTextareaLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormTextareaLabel>
    ) : null}
  </GroupContainer>
);

export default FormTextarea;