import React, { useContext } from 'react';
import { TypographyContext } from '../typography/typography';

const useTypograpghy = () => {
  const { typography, updateTypography } = useContext(TypographyContext);
  return { typography, updateTypography };
};

export default useTypograpghy;
