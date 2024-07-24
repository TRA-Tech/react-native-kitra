import type { ComponentType, ForwardedRef } from 'react';
import React, { createRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { StyleProp, ViewStyle } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './theme/theme';
import { TypographyContext, TypographyProvider } from './typography/typography';
import { NotificationContextType, NotificationProvider } from './notification/notification';

const Feather = require('react-native-vector-icons/Feather').default;
const Ionicons = require('react-native-vector-icons/Ionicons').default;
const AntDesign = require('react-native-vector-icons/AntDesign').default;

export const showNotificationRef = createRef<NotificationContextType>();

const messageTypes = (theme:any) => ({
  SUCCESS: {
    backgroundColor: theme.colors.status.successLight,
    icon: <Feather name="check" size={25} color={theme.colors.status.success} />,
  },
  INFO: {
    backgroundColor: theme.colors.system.primary15,
    icon: <Ionicons name="information-circle-outline" size={25} color={theme.colors.system.primary} />,
  },
  DANGER: {
    backgroundColor: theme.colors.status.errorLight,
    icon: <AntDesign name="warning" size={25} color={theme.colors.status.error} />,
  },
  WARNING: {
    backgroundColor: theme.colors.status.warningLight,
    icon: <AntDesign name="warning" size={25} color={theme.colors.status.warning} />,
  },
});

export type showNotificationProps = {
  /**
   * The header text of the notification.
   */
  header?: string;
   /**
   * The message text of the notification.
   */
  message?: string;
  /**
   * The type of the notification, which corresponds to a key in the `messageTypes` function's return type.
   */
  type: keyof ReturnType<typeof messageTypes>
}

export const showNotification = (item:showNotificationProps) => {
  showNotificationRef.current?.showNotification({ type: item.type, header: item.header, message: item.message });
};

Animated.addWhitelistedNativeProps({ text: true });

type KitraProviderType= {
   /**
   * The child elements to be rendered inside the provider.
   */
  children?:any,
   /**
   * Allows customization of notification limits, styles, and rendering.
   */
  notificationProps?:{
    /**
   * The maximum number of notifications to show in the queue. Defaults to 3.
   */
    limit?:number,
    /**
     * A function that returns the styles for different message types based on the theme and optional color scheme.
     * - `theme`: The current theme object.
     * - `colorScheme`: Optional color scheme, which can be 'dark' or 'light'.
     * - `backgroundColor`: Background color for the notification.
     * - `icon` (optional): An optional icon to be displayed.
     * - `onPress` (optional): A function to be called when the notification is pressed.
     */
    messageType?:(theme?:any, colorScheme?:'dark' | 'light') => {[key:string]: {
        backgroundColor:string,
      icon?:React.ReactNode
      onPress?:()=>void
    }},
     /**
     * Custom styles for the container holding the notifications.
     */
    notificationContainerStyle?:StyleProp<ViewStyle>,
     /**
     * A custom view function to render the notification.
     * Returns a React node to be used as the custom notification view.
     * - `header`: The header text of the notification.
     * - `type`: The type of the notification (e.g., 'SUCCESS', 'INFO').
     * - `message`: The message text of the notification.
     * - `theme`: The current theme object.
     */
    customView?:({ header, type, message, theme }:
      {header:string, type:string, message:string, theme:any})=>React.ReactNode
  },
 }

export const KitraProvider =
({ children, notificationProps }: KitraProviderType) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider>
      <TypographyProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NotificationProvider
            messageType={theme => (notificationProps?.messageType ?
              notificationProps?.messageType(theme) : messageTypes(theme))}
            notificationContainerStyle={notificationProps?.notificationContainerStyle}
            limit={notificationProps?.limit}
            customView={item => notificationProps?.customView?.(item)}
            ref={showNotificationRef}
          >
            {children}
          </NotificationProvider>
        </SafeAreaProvider>

      </TypographyProvider>
    </ThemeProvider>
  </GestureHandlerRootView>
);

export function applyDefaults<T>(Component: ComponentType<T>) {
  return React.forwardRef((props: T, ref: ForwardedRef<any>) => (
    <TypographyContext.Consumer>
      {typography =>
        <Component ref={ref} typography={typography?.typography} {...props} />
          }
    </TypographyContext.Consumer>
  ));
}
