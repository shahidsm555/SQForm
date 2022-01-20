export type optionValue = string | number;

interface Option {
  /** Label of the option */
  label: string;
  /** Value of the option */
  value: optionValue;
  /** Whether the option is disabled */
  isDisabled?: boolean;
}

export default Option;