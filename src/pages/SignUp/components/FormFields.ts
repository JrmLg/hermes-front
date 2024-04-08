export interface FieldProps {
  type: string,
  name: string,
  id: string,
  label: string,
  required: boolean,
  fullWidth: boolean,
  gridSizes: {
    xs?: number,
    sm?: number,
  }
  autoFocus?: boolean,
  autoComplete?: string,
}

export const fieldsConfig: FieldProps[] = [
  {
    type: 'text',
    autoComplete: 'fname',
    name: 'firstname',
    id: 'firstname',
    label: 'Prénom',
    required: true,
    fullWidth: true,
    autoFocus: true,
    gridSizes: { xs: 12, sm: 6 },
  },
  {
    type: 'text',
    autoComplete: 'lname',
    name: 'lastname',
    id: 'lastname',
    label: 'Nom',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12, sm: 6 },
  },
  {
    type: 'email',
    autoComplete: 'email',
    name: 'email',
    id: 'email',
    label: 'Adresse mail',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12 },
  },
  // {
  //   type: 'text',
  //   name: 'rppsCode',
  //   id: 'rppsCode',
  //   label: 'Numero RPPS',
  //   required: true,
  //   fullWidth: true,
  //   gridSizes: { xs: 12 },
  // },
  {
    type: 'password',
    autoComplete: 'new-password',
    name: 'password',
    id: 'password',
    label: 'Mot de passe',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12 },
  },
  {
    type: 'password',
    autoComplete: 'new-password',
    name: 'confirmPassword',
    id: 'confirmPassword',
    label: 'Confirmez le mot de passe',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12 },
  },
];