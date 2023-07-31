import React, {memo} from 'react';
import {IButtonProps} from './types';

const Button = ({onClick}: IButtonProps): JSX.Element => {
  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
};

export default memo(Button);
