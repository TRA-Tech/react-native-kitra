/* eslint-disable react/prefer-stateless-function */
import type { ComponentType } from 'react';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeContext, ThemeProvider } from './theme/theme';
import { TypographyContext, TypographyProvider } from './typography/typography';
import { NotificationProvider } from './notification/notification';

type KitraProviderType = {
  children?: any,
  limit?: number,
  messageType?: {
    [key: string]: {
      backgroundColor: string,
      icon: React.ReactNode
    }
  },
  linearMessageType?: (theme?:any, colorScheme?:'dark' | 'light') => {[key:string]: {
    backgroundColor:{
      color:string [],
      location:number [],
      bottomColor:string [],
      bottomLocation:number []
    }
    icon:React.ReactNode
  }}
}
export const KitraProvider = ({ children, messageType, linearMessageType, limit }: KitraProviderType) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider>
      <NotificationProvider
        linearMessageType={(theme, colorScheme) => (linearMessageType ? linearMessageType(theme, colorScheme) : theme)}
        messageType={messageType}
        limit={limit}
      >
        <TypographyProvider>
          {children}
        </TypographyProvider>
      </NotificationProvider>
    </ThemeProvider>
  </GestureHandlerRootView>
);

export function applyDefaults<T>(Component: ComponentType<T>) {
  class Forwarded extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <TypographyContext.Consumer>
              {typography =>
                <Component theme={theme?.theme} typography={typography?.typography} {...this.props as T} />
              }
            </TypographyContext.Consumer>
          )}
        </ThemeContext.Consumer>
      );
    }
  }

  return Forwarded;
}
