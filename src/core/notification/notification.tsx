import React, { useMemo, useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import Animated, { FadeOut, Layout, LightSpeedInLeft } from 'react-native-reanimated';

import { TaskQueue } from '../../utilities';
import useTheme from '../hooks/useTheme';
import useTypograpghy from '../hooks/useTypography';

const messageTypes = (theme:any) => ({
  SUCCESS: { backgroundColor: theme.colors.status.successLight },
  INFO: { backgroundColor: theme.colors.system.primary15 },
  DANGER: { backgroundColor: theme.colors.status.errorLight },
  WARNING: { backgroundColor: theme.colors.status.warningLight },
});
 type NotificationContextType= {
  showNotification: (props: showNotificationProps) => void
}
type showNotificationProps = {
  header?:string,
  message?:string,
  type: keyof typeof messageTypes,
}
type NotificationProviderType= {
  children?:any,
  limit?:number,
  messageType?:(theme?:any) => {[key:string]: {
      backgroundColor:string,
    icon?:React.ReactNode
    onPress?:()=>void
  }},
  notificationCcontainerStyle?:StyleProp<ViewStyle>
}
const NotificationContext = React.createContext<NotificationContextType>({} as NotificationContextType);

const NotificationProvider = ({ children, limit = 3, messageType, notificationCcontainerStyle }:NotificationProviderType) => {
  const [queue, setQueue] = useState<Array<{ type:string, message: string, header: string}>>([]);
  const { theme } = useTheme();
  const { typography } = useTypograpghy();
  // @ts-ignore
  const TaskManager = new TaskQueue({ sleepBetweenTasks: 1000, concurrency: 1 });

  const showNotification = (item:showNotificationProps) => {
    TaskManager.createTask(() => {
      pushQueue(item);
    });
  };
  const pushQueue = (item:any) => {
    setTimeout(() => {
      setQueue(prev => {
        limit <= prev.length ?
          popQueue(1)
          : popQueue();
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

  const contextValue = useMemo(() => ({ showNotification }), []);
  function onPress(index:number) {
    const queueTemp = [...queue];
    queueTemp.splice(index, 1);
    setQueue(queueTemp);
  }

  return (
    // @ts-ignore
    <NotificationContext.Provider value={contextValue}>
      {children}
      {queue.map((item:any, index) => (
        <Animated.View
          key={item.keyID || index}
          entering={LightSpeedInLeft}
          exiting={FadeOut}
          layout={Layout.springify()}
          style={[styles.itemContainer, notificationCcontainerStyle, { marginTop: 110 * (index - 1) }]}
        >
          <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress(index)}>
            <View style={[styles.innerContainer, { backgroundColor: messageType?.(theme)[item?.type]?.backgroundColor || 'transparent' }]} />
            <View style={[styles.iconContainer]}>
              {messageType?.(theme)[item?.type]?.icon}
            </View>
            <View style={styles.textsContainer}>
              <Text ellipsizeMode="middle" numberOfLines={3} style={[styles.headerText, { ...typography.body.medium, color: theme.colors.neutral.lightBlack }]}>
                {item?.header || item?.type }
              </Text>
              <Text ellipsizeMode="middle" numberOfLines={3} style={[styles.descText, { ...typography.body.sregular, color: theme.colors.neutral.lightBlack }]}>
                {item?.message}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}

    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    width: '100%',
    zIndex: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    top: 150,
    position: 'absolute',
  },
  innerContainer: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 100,
    borderRadius: 10,
    zIndex: 20,
  },
  iconContainer: {
    zIndex: 100,
    marginLeft: 18,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', flex: 1, paddingVertical: 16,
  },
  headerText: {
    paddingHorizontal: 10,
  },
  descText: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  textsContainer: { flex: 1, zIndex: 100 },
});
