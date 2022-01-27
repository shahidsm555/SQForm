import type {FormikHelpers} from 'formik';
import type {ObjectShape} from 'yup/lib/object';
import type {GridProps} from '@material-ui/core';

export interface HeaderPropTypes {
  /** Optional Text button to display in the section header */
  actionButton?: React.ReactNode;
  /** Title to display in the section header */
  title: string;
  /** Informative text to display as a subheader next to the Title */
  infoText?: string;
  /** Warning text to display as a subheader next to the Title */
  warningText?: string;
  /** Error text to display as a subheader next to the Title
   * if the form is in a failed state
   */
  errorText?: string;
  /** Success text to display as a subheader next to the Title
   * if the form has no errors and is in a Valid state
   */
  successText?: string;
  /** This prop is controlled by taskModules.isFailedState
   * Red failure text to display as a subheader next to the Title
   * if the form is in a failed state where the user cannot continue
   */
  isFailedState?: boolean;
}

export interface AgentScriptPropTypes extends HeaderPropTypes {
  /** Scripted Text for the user to read */
  text: string;
}

export interface OutcomePropTypes extends HeaderPropTypes {
  /** SQForm Elements to render inside the Form */
  FormElements: React.ReactNode | React.ReactNode[];
  /** Any props from MUI <Grid> component */
  muiGridProps?: GridProps;
}

export interface FormikProps {
  /** Form Entity Object aka initial values of the form */
  initialValues: Record<string, unknown>;
  /** Form Submission Handler | @typedef onSubmit: (values: Values, formikBag: FormikBag, context) => void | Promise<any> */
  onSubmit?: (
    values: Record<string, unknown>,
    formikBag: FormikHelpers<Record<string, unknown>>,
    context: unknown
  ) => void | Promise<unknown>;
  /** Yup validation schema shape */
  validationSchema?: ObjectShape;
}

export interface TaskModuleProps {
  /** Unique name used as a key for managing expansion state within Accordion */
  name: string;
  /** Title text */
  title: string;
  /** Subtitle text - Each Subtitle is separated by a pipe "|" */
  subtitles?: string[];
  /** Panel is disabled, the user cannot toggle the panel while disabled */
  isDisabled?: boolean;
  /** Is initially expanded */
  isInitiallyExpanded?: boolean;
  /** Controlled loading */
  isLoading?: boolean;
  /** Custom loading message for controlled loading */
  isLoadingMessage?: string;
  /** expandPanel callback synchronizes consumer state with Accordion state.
   * Requires isPanelExpanded prop. */
  expandPanel: (isPanelExpanded: unknown, ...args: any[]) => void;
  /** Optional prop for the consumer to define the cards open/close state.
   * Requires expandPanel prop. */
  isPanelExpanded?: boolean;
  /** Optional click handler if you want to perform a side effect on click */
  onClick: () => void;
  /** Reset button text */
  resetButtonText?: string;
  /** Submit button text */
  submitButtonText?: string;
  /** Flag for if the form is in a failed state where the user cannot continue */
  isFailedState?: boolean;
  /** Manually disable submit button */
  isSubmitButtonDisabled?: boolean;
  /** The props used to configure SQForm */
  formikProps: FormikProps;
  /** The props used to configure the Scripted Text section */
  scriptedTextProps: AgentScriptPropTypes;
  /** The props used to configure the Outcome form section */
  outcomeProps: OutcomePropTypes;
}

export interface GuidedWorkflowProps {
  /** Main Title */
  mainTitle: string;
  /** Main Subtitle Informative Text */
  mainSubtitle?: string;
  /** Number of tasks completed (Default is zero) */
  initialCompletedTasks?: number;
  /**
   * Disables all Task Modules except the current Active Task module
   * This prevents the user from returning to a previous task module
   */
  isStrictMode?: boolean;
  /**
   * Callback function which passes the error as an argument for the consumer to handle
   * Usually the consumer will render an alert to signal an error occured
   */
  onError: (error: Error) => void;
  /** Task Module configuration Object(s) */
  taskModules: TaskModuleProps[];
  /** An object of css-in-js style properties to be passed */
  containerStyles: Record<string, unknown>;
}
