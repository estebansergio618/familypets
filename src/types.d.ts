export interface CardInterface {
  icon: string;
  title: string;
  description: string;
  button?: string;
  type?: string;
  color?: string;
  route?: string;
  subservices?: string[];
}

export interface FormInputsInterface {
  id: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
  min?: string;
  max?: string;
  errorMessage?: string;
}
