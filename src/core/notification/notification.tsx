import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Animated, { FadeOut, LightSpeedInLeft, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TaskQueue } from '../../utilities';
import useTheme from '../hooks/useTheme';
import useTypograpghy from '../hooks/useTypography';
import { showNotificationProps } from '../KitraProvider';

export type NotificationContextType = {
  /**
   * Function to show a notification.
   */
  showNotification: (props: showNotificationProps) => void;
}

type NotificationProviderType = {
  /**
   * The child elements to be rendered inside the provider.
   */
  children?: React.ReactNode;
  /**
   * The maximum number of notifications to show in the queue. Defaults to 3.
   */
  limit?: number;
   /**
     * A function that returns the styles for different message types based on the theme and optional color scheme.
     * - `theme`: The current theme object.
     * - `colorScheme`: Optional color scheme, which can be 'dark' or 'light'.
     * - `backgroundColor`: Background color for the notification.
     * - `icon` (optional): An optional icon to be displayed.
     * - `onPress` (optional): A function to be called when the notification is pressed.
     */
  messageType?: (theme?: any) => {
    [key: string]: {
      backgroundColor: string;
      icon?: React.ReactNode;
      onPress?: () => void;
    }
  };
    /**
     * Custom styles for the container holding the notifications.
     */
  notificationContainerStyle?: StyleProp<ViewStyle>;
   /**
     * A custom view function to render the notification.
     * Returns a React node to be used as the custom notification view.
     * - `header`: The header text of the notification.
     * - `type`: The type of the notification (e.g., 'SUCCESS', 'INFO').
     * - `message`: The message text of the notification.
     * - `theme`: The current theme object.
     */
  customView?: ({ header, type, message, theme }:
     { header: string; type: string; message: string; theme: any }) => React.ReactNode;
}

const NotificationContext = React.createContext<NotificationContextType>({} as NotificationContextType);

const NotificationProvider = forwardRef<NotificationContextType, NotificationProviderType>(
  ({ children, limit = 3, messageType, notificationContainerStyle, customView }: NotificationProviderType, ref) => {
    const [queue, setQueue] = useState<Array<{ type: string, message: string, header: string }>>([]);
    const { theme } = useTheme();
    const { typography } = useTypograpghy();
    const { top } = useSafeAreaInsets();
    // @ts-ignore
    const TaskManager = new TaskQueue({ sleepBetweenTasks: 1000, concurrency: 1 });

    const showNotification = (item: showNotificationProps) => {
      TaskManager.createTask(() => {
        pushQueue(item);
      });
    };

    const pushQueue = (item: any) => {
      setTimeout(() => {
        setQueue(prev => {
          limit <= prev.length ? popQueue(1) : popQueue();
          return [{ ...item, keyID: Math.random() }, ...prev];
        });
      }, 100);
    };

    const popQueue = (duration = 5000) => {
      setTimeout(() => {
        setQueue(prev => {
          const newQueue = [...prev];
          if (newQueue.length) {
            newQueue.pop();
            return newQueue;
          }
          return [...prev];
        });
      }, duration);
    };

    useImperativeHandle(ref, () => ({
      showNotification,
    }));

    const contextValue = useMemo(() => ({ showNotification }), []);

    function onPress(index: number) {
      const queueTemp = [...queue];
      queueTemp.splice(index, 1);
      setQueue(queueTemp);
    }

    return (
      <NotificationContext.Provider value={contextValue}>
        {children}
        {queue.length > 0 && (
        <View style={[notificationContainerStyle, {
          width: '100%',
          zIndex: 100,
          position: 'absolute',
          alignItems: 'center',
          marginTop: top,
        }]}
        >
          { queue.map((item: any, index) => (
            <Animated.View
              key={item.keyID || index}
              entering={LightSpeedInLeft}
              exiting={FadeOut}
              layout={LinearTransition.springify()}
              style={[styles.itemContainer,
                { marginTop: 10 }]}
            >
              <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress(index)}>
                {customView?.({ type: item.type, header: item.header, message: item.message, theme }) || (
                <View style={[styles.innerContainer,
                  { backgroundColor: messageType?.(theme)[item?.type]?.backgroundColor || 'transparent' },
                ]}
                >
                  <View style={[styles.iconContainer]}>
                    {messageType?.(theme)[item?.type]?.icon}
                  </View>
                  <View style={styles.textsContainer}>
                    {item?.header && (
                    <Text
                      style={{ ...typography.body.medium, color: theme.colors.neutral.lightBlack }}
                    >
                      {item.header}
                    </Text>
                    )}
                    <Text
                      style={{ ...typography.body.sregular, color: theme.colors.neutral.lightBlack }}
                    >
                      {item?.message}
                    </Text>
                  </View>
                </View>
                )}
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
        )}
      </NotificationContext.Provider>
    );
  },
);

export { NotificationProvider, NotificationContext };

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    zIndex: 100,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    borderRadius: 10,
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    columnGap: 10,
    minHeight: 100,
  },
  iconContainer: {
    zIndex: 100,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  textsContainer: { zIndex: 100, flex: 1, rowGap: 10 },
});
