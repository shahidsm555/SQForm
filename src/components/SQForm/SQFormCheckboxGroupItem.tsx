import React from 'react';
import {FormControlLabel} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import type {CheckboxProps} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from './useForm';
import type {Option} from 'types';

const useStyles = makeStyles((theme) => ({
  checkboxGroupItem: {
    marginBottom: theme.spacing(1.5),
  },
  rowDisplay: {
    marginRight: theme.spacing(3.75),
  },
}));

interface SQFormCheckboxGroupItemProps {
  /** The name of the group this checkbox is a part of */
  groupName: string;
  /** Label for the checkbox */
  label: string;
  /** Value for the checkbox */
  value: string | boolean | number;
  /** Function to call when input value is changed */
  onChange: CheckboxProps['onChange'];
  /** Whether this group item is part of a group displayed in a row */
  isRowDisplay?: boolean;
  /** Whether the checkbox is disabled */
  isDisabled?: boolean;
  /** Props for the checkbox input */
  inputProps?: CheckboxProps;
}

function SQFormCheckboxGroupItem({
  groupName,
  label,
  value,
  onChange,
  isRowDisplay = false,
  isDisabled = false,
  inputProps = {},
}: SQFormCheckboxGroupItemProps): JSX.Element {
  const {
    formikField: {field},
    fieldHelpers: {handleChange},
  } = useForm<
    Option['value'][] | Option['value'],
    React.ChangeEvent<HTMLInputElement>
  >({name: groupName, onChange});

  const classes = useStyles();

  const isChecked = React.useMemo(() => {
    if (Array.isArray(field.value)) {
      return field.value.includes(value.toString());
    }

    return !!field.value;
  }, [value, field]);

  return (
    <FormControlLabel
      className={`
        ${classes.checkboxGroupItem}
        ${isRowDisplay ? classes.rowDisplay : ''}
      `}
      label={label}
      control={
        <Checkbox
          name={groupName}
          checked={isChecked}
          value={value}
          color="primary"
          disabled={isDisabled}
          onChange={handleChange}
          {...inputProps}
        />
      }
    />
  );
}

export default SQFormCheckboxGroupItem;