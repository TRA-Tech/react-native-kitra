import React, { createContext, useMemo, useState } from 'react';
import type { FCC, TypographyType } from 'src/types';

type TypographyContextType = {
    /**
   * This includes all typography-related styles and configurations.
   */
  typography: TypographyType
    /**
   *   - `body` (optional): Partial updates for the body typography styles.
   *   - `heading` (optional): Partial updates for the heading typography styles.
   *   - Other keys (optional): Additional properties to be merged into the typography settings.
   * This function will merge the provided updates with the current typography settings.
   */
  updateTypography: (theme: {
    [key: string]: any,
    body?: { [key: string]: any },
    heading?: { [key: string]: any }
  }) => void
}

const TypographyContext = createContext<TypographyContextType>({} as TypographyContextType);

const TypographyProvider: FCC = ({ children }) => {
  const [typography, setTypography] = useState<TypographyType>(defaultTypography);

  function updateTypography(newTypography: { [key: string]: any,
    body?: { [key: string]: any }, heading?: { [key: string]: any } }) {
    const otherProperties = Object.keys(newTypography)
      .filter(key => !key.includes('body') && !key.includes('heading'))
      .reduce((cur, key) => Object.assign(cur, { [key]: newTypography?.[key] }), {});

    setTypography((prev: { body: any; heading: any; }) => ({
      ...prev,
      ...otherProperties,
      body: {
        ...prev.body,
        ...newTypography?.body,
      },
      heading: {
        ...prev.heading,
        ...newTypography?.heading,
      },
    }));
  }

  const contextValue = useMemo(() => ({ updateTypography, typography }), [typography]);

  return (
    <TypographyContext.Provider value={contextValue}>
      {children}
    </TypographyContext.Provider>
  );
};

export { TypographyContext, TypographyProvider };

export const defaultTypography = {
  heading: {
    h1: {
      fontSize: 30,
      lineHeight: 45,
      fontFamily: 'Poppins-Medium',
    },
    h2: {
      fontSize: 28,
      lineHeight: 42,
      fontFamily: 'Poppins-Medium',
    },
    h3: {
      fontSize: 23,
      lineHeight: 35,
      fontFamily: 'Poppins-Medium',
    },
    h4: {
      fontSize: 19,
      lineHeight: 29,
      fontFamily: 'Poppins-Medium',
    },
    h5: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: 'Poppins-Medium',
    },
  },
  body: {
    regular: {
      fontSize: 14,
      lineHeight: 16,
      fontFamily: 'Poppins-Regular',
    },
    sregular: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'Poppins-Regular',
    },
    xsregular: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'Poppins-Regular',
    },
    xxsregular: {
      fontSize: 8,
      lineHeight: 12,
      fontFamily: 'Poppins-Regular',
    },
    medium: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'Poppins-Medium',
    },
    smedium: {
      fontSize: 12,
      lineHeight: 18,
      fontFamily: 'Poppins-Medium',
    },
    xsmedium: {
      fontSize: 10,
      lineHeight: 16,
      fontFamily: 'Poppins-Medium',
    },
    xxsmedium: {
      fontSize: 8,
      lineHeight: 12,
      fontFamily: 'Poppins-Medium',
    },
  },
};
