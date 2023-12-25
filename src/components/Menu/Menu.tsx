import { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import type { FCCWD, MenuProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Divider from '../Divider/Divider';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  openButton: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  menuContainer: {
    width: 200,
    borderRadius: 5,
    position: 'absolute',
  },
  menuButton: {
    margin: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
});

const Menu : FCCWD<MenuProps> = (
  { typography,
    theme,
    items,
    dividerColor,
    menuStyle,
    labelStyle,
    containerStyle,
    rowStyle,
    closeOnPress,
    button = () => <Text style={{ color: theme?.primary, fontSize: 20, bottom: 5 }}>...</Text> },
) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [menuHeight, setMenuHeight] = useState({ height: 0 });
  const menu = useRef<View>(null);

  useEffect(() => {
    menu.current?.measure((x, y, width, height, pageX, pageY) => {
      setSize({ x: pageX, y: pageY, width, height });
    });
  }, [open]);

  const closeMenu = useCallback(() => {
    if (closeOnPress) {
      setOpen(false);
    }
  }, [closeOnPress]);
  return (
    <View style={[styles.container, { width: menuStyle ? menuStyle?.width : 200 }, containerStyle]} ref={menu}>
      <TouchableOpacity testID="open_button" onPress={() => setOpen(!open)} style={styles.openButton}>
        {button(open)}
      </TouchableOpacity>
      {open ? (
        <Animated.View
          testID="menu_container"
          style={[
            styles.menuContainer,
            { backgroundColor: menuStyle?.backgroundColor, right: 0 },
            HEIGHT - (size.y + menuHeight.height + size.height) >= 0 ? { top: size.height + 10 } : { bottom: 30 }, menuStyle,
          ]}
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          onLayout={e => setMenuHeight({ height: e.nativeEvent.layout.height })}
        >
          {items.map((item, index) => (
            <View key={index} style={rowStyle}>
              <TouchableOpacity testID={`item_button_${index}`} activeOpacity={closeOnPress ? 0.4 : 1} onPress={() => { item.onPress && item.onPress(); closeMenu(); }} style={[styles.menuButton, { backgroundColor: menuStyle?.backgroundColor }]}>
                {item.left && item.left}
                <View style={styles.buttonContainer}>
                  <Text style={[
                    { fontSize: typography?.body.smedium.fontSize,
                      fontWeight: '500',
                      lineHeight: typography?.body.smedium.lineHeight,
                      paddingHorizontal: item.left ? 5 : 0,
                      color: theme?.lightBlack }, labelStyle]}
                  >
                    {item.label}
                  </Text>
                  {item.right && item.right}
                </View>
              </TouchableOpacity>
              {items.length - 1 !== index && dividerColor ?
                <Divider theme={theme} typography={typography} color={dividerColor} width={Number(menuStyle?.width) - 20 || 180} />
                : null}
            </View>
          ))}
        </Animated.View>
      )
        :
        null
    }
    </View>

  );
};

export default applyDefaults(Menu);
