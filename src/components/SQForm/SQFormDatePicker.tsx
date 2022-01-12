import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {DatePicker} from '@material-ui/pickers';
import type {BaseDatePickerProps} from '@material-ui/pickers';
import {makeStyles, ClickAwayListener} from '@material-ui/core';
import type {InputBaseComponentProps} from '@material-ui/core';
import type {BaseFieldProps} from 'types';
import {useForm} from './useForm';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-root.Mui-focused, & .MuiInputBase-root:hover:not(.Mui-disabled)':
      {
        '& .MuiIconButton-root': {
          color: 'var(--color-teal)',
        },
      },
  },
}));

interface SQFormDatePickerProps extends BaseFieldProps {
  /** Disabled property to disable the input if true */
  isDisabled?: boolean;
  /** Required property used to highlight input and label if not fulfilled */
  isRequired?: boolean;
  /** Placeholder text used inside the input field to provide hints to the user */
  placeholder?: string;
  /** Custom onBlur event callback */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Custom onChange event callback */
  onChange?: (date: React.ChangeEvent<moment.Moment> | unknown) => void;
  /** Disable specific date(s) (day: DateIOType) => boolean
   * This is a predicate function called for every day of the month
   * Return true to disable that day or false to enable that day
   */
  setDisabledDate?: (day: unknown) => boolean;
  /** Any valid prop for material ui datepicker child component - https://material-ui.com/components/pickers/  */
  muiFieldProps?: BaseDatePickerProps<moment.Moment>;
  /** Any valid prop for MUI input field - https://material-ui.com/api/text-field/ & https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes */
  muiTextInputProps?: InputBaseComponentProps;
  /** A Boolean flag used when using calendar only; disabled text filed input */
  isCalendarOnly?: boolean;
}

function SQFormDatePicker({
  name,
  label,
  size = 'auto',
  isDisabled = false,
  placeholder = '',
  onBlur,
  onChange,
  setDisabledDate,
  muiFieldProps = {},
  muiTextInputProps = {},
  isCalendarOnly = false,
}: SQFormDatePickerProps): JSX.Element {
  const {
    formikField: {field, helpers},
    fieldState: {isFieldError, isFieldRequired},
    fieldHelpers: {handleBlur, HelperTextComponent},
  } = useForm<moment.Moment | null, unknown>({
    name,
    onBlur,
    onChange,
  });

  const handleChange = (date: moment.Moment | null) => {
    helpers.setValue(date);
    onChange && onChange(date);
  };

  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const handleClose = () => setIsCalendarOpen(false);
  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen);
  const handleClickAway = () => {
    if (isCalendarOpen) {
      setIsCalendarOpen(false);
    }
  };

  const classes = useStyles();

  // An empty string will not reset the DatePicker so we have to pass null
  const value = field.value || null;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Grid item sm={size}>
        <DatePicker
          label={label}
          disabled={isDisabled}
          shouldDisableDate={setDisabledDate}
          value={value}
          onChange={handleChange}
          onClose={handleClose}
          onOpen={toggleCalendar}
          open={isCalendarOpen}
          renderInput={(inputProps) => {
            return (
              <TextField
                {...inputProps}
                name={name}
                color="primary"
                error={isFieldError}
                fullWidth={true}
                inputProps={{...inputProps.inputProps, ...muiTextInputProps}}
                InputLabelProps={{shrink: true}}
                FormHelperTextProps={{error: isFieldError}}
                helperText={!isDisabled && HelperTextComponent}
                placeholder={placeholder}
                onBlur={handleBlur}
                required={isFieldRequired}
                onClick={
                  isCalendarOnly && !isDisabled
                    ? toggleCalendar
                    : handleClickAway
                }
                classes={classes}
              />
            );
          }}
          {...muiFieldProps}
        />
      </Grid>
    </ClickAwayListener>
  );
}

export default SQFormDatePicker;
