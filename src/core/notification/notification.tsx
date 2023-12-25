import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import Animated, { FadeOut, Layout, LightSpeedInLeft } from 'react-native-reanimated';

import IoniconsIcon from '../../components/Icons/Ionicons';
import useTheme from '../hooks/useTheme';
import useTypograpghy from '../hooks/useTypography';

const messageTypes: any = {
  SUCCESS: { backgroundColor: '#09CE63', icon: 'checkmark' },
  WARNING: { backgroundColor: '#FFD234', icon: 'alert' },
  ERROR: { backgroundColor: '#FF3434', icon: 'close' },
  INFO: { backgroundColor: '#67A7C1', icon: 'information' },
};
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
  messageType?:any,
  containerStyle?:StyleProp<ViewStyle>
  linearMessageType?: (theme?:any, colorScheme?:'dark' | 'light') => {[key:string]: {
    backgroundColor:{
      color:string [],
      location:number [],
      bottomColor:string [],
      bottomLocation:number []
    }
    icon:React.ReactNode
    onPress:()=>void
  }}
}
const NotificationContext = React.createContext<NotificationContextType>({} as NotificationContextType);

const NotificationProvider = ({ children, limit = 3, messageType = messageTypes, linearMessageType, containerStyle }:NotificationProviderType) => {
  const [queue, setQueue] = useState([{ type: '', message: '', header: '' }]);
  const { theme, colorScheme } = useTheme();
  const { typography } = useTypograpghy();
  const showNotification = (item:showNotificationProps) => {
    pushQueue(item);
  };

  const pushQueue = (item:any) => {
    setTimeout(() => {
      setQueue(prev => {
        limit <= prev.length ? popQueue(1) : popQueue();
        if (prev.length > 0) popQueue();
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
          style={[styles.itemContainer, { alignSelf: 'center',
            top: 150 }, containerStyle, { position: 'absolute',
            backgroundColor: !linearMessageType ? messageType[item?.type]?.backgroundColor : 'transparent',
            marginTop: 110 * (index - 1) }]}
        >
          <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => onPress(index)}>
            {linearMessageType && item.type && (
            <>
              <LinearGradient
                colors={linearMessageType(theme, colorScheme)[item?.type]?.backgroundColor.color || []}
                locations={linearMessageType(theme, colorScheme)[item?.type]?.backgroundColor.location}
                start={{ x: 0.3, y: 0.7 }}
                end={{ x: 1, y: 0 }}
                style={[styles.linearConteiner]}
              />
              <LinearGradient
                colors={linearMessageType(theme, colorScheme)[item?.type]?.backgroundColor.bottomColor || []}
                locations={linearMessageType(theme, colorScheme)[item?.type]?.backgroundColor.bottomLocation}
                start={{ x: 0.3, y: 0.7 }}
                end={{ x: 1, y: 0 }}
                style={[styles.linearConteiner, { height: 102, zIndex: 10 }]}
              />
            </>
            )}
            { linearMessageType ? (
              <View style={styles.iconContainer}>
                {linearMessageType(theme, colorScheme)[item?.type]?.icon}
              </View>
            ) : (
              <View style={[styles.iconContainer, { backgroundColor: theme?.white }]}>
                <IoniconsIcon name={messageType[item?.type]?.icon} size={15} />
              </View>
            )}
            <View style={{ flex: 1, zIndex: 100 }}>
              <Text ellipsizeMode="middle" numberOfLines={3} style={[styles.headerText, { color: theme.white }]}>
                {item?.header || item?.type }
              </Text>
              <Text ellipsizeMode="middle" numberOfLines={3} style={[styles.descText, { color: theme.white }]}>
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
    paddingHorizontal: 24,
    zIndex: 100,
    height: 100,
    borderRadius: 10,

  },
  linearConteiner: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 100,
    borderRadius: 10,
    zIndex: 20,
  },
  iconContainer: {
    zIndex: 100,
    marginTop: 21,
    marginLeft: 18,
    width: 28,
    height: 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: '500',
    marginTop: 17,
    paddingHorizontal: 20,
  },
  descText: {
    fontWeight: '400',
    marginTop: 6,
    paddingHorizontal: 20,
  },

});
