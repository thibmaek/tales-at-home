import React from 'react';

import Setup from 'src/containers/Setup';

const LoginType = { //eslint-disable-line no-unused-vars
  title: `Aanmelden`,
  action: `Doorgaan`,
  method: `login`,
};

const SignupType = {
  title: `Account aanmaken`,
  action: `Bevestigen`,
  method: `signup`,
};

export default () => (
  <Setup authType={SignupType} />
);
