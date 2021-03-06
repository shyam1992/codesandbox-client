import React from 'react';
import styled, { css } from 'styled-components';
import Logo from 'app/components/Logo';

import { sandboxUrl } from 'app/utils/url-generator';

type Props = {
  id: string,
  small: boolean,
};

const Text = styled.span`
  color: white;
  ${({ small }) =>
    small &&
    css`
  @media (max-width: 620px) {
    display: none;
  }
  `};
`;

const EditText = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;

  svg {
    margin-left: 0.5rem;
  }
`;

export default ({ sandbox, small }: Props) =>
  <EditText
    small={small}
    target="_blank"
    rel="noopener noreferrer"
    href={sandboxUrl(sandbox) + document.location.search}
  >
    <Text small={small}>Edit on CodeSandbox</Text>
    <Logo />
  </EditText>;
