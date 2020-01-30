import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface Props {}

export const FORMS_QUERY = gql`
  query Forms {
    forms {
      id
      name
      fields {
        id
        type
        name
      }
    }
  }
`;

export const FormBuilder: React.FC<Props> = () => {
  const { data } = useQuery(FORMS_QUERY);

  console.log(data);

  return <div />;
};
