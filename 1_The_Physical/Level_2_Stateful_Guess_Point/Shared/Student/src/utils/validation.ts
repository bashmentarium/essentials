import {
  FIRST_NAME_LENGTH_ERROR,
  LAST_NAME_LENGTH_ERROR,
  StudentProps,
  INCOMPLETE_ERROR,
} from "../index";

export const validateFirstName = (firstName: string) => {
  if (firstName.length < 2 || firstName.length > 10) {
    throw new Error(FIRST_NAME_LENGTH_ERROR);
  }
};

export const validateLastName = (lastName: string) => {
  if (lastName.length < 2 || lastName.length > 15) {
    throw new Error(LAST_NAME_LENGTH_ERROR);
  }
};

export const validateProps = (props: StudentProps) => {
  if (!props.firstName || !props.lastName) {
    throw new Error(INCOMPLETE_ERROR);
  }

  validateFirstName(props.firstName);
  validateLastName(props.lastName);
};
