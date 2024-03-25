/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, ToggleButtonProps } from '../../types';
import { opacity } from '../../utilities';
import { applyDefaults } from '../../core/KitraProvider';

const ToggleButton: FCCWD<ToggleButtonProps> = (
  {
    typography,
    theme,
    buttons,
    size = 'medium',
  },
) => {
  const { componentTheme } = useComponentTheme(theme, 'toggleButton');
  const [buttonList, setButtonList] = useState(buttons.map((item, index) => ({ ...item, id: index, active: false })));

  useEffect(() => {
    setButtonList(buttons.map((item, index) => ({ ...item, id: index, active: false })));
  }, [buttons]);

  return (
    <View style={{ flexDirection: 'row' }}>
      {buttonList?.map((item, index) => (
        <TouchableOpacity
          testID={`toggleButton-item-${index}`}
          activeOpacity={0.5}
          key={item.label}
          onPress={() => {
            item.onPress(!buttonList[index]!.active);
            const tempButtonList = [...buttonList];
            buttonList[index]!.active ? tempButtonList[index]!.active = false : tempButtonList[index]!.active = true;
            setButtonList(tempButtonList);
          }}
          style={[
            {
              backgroundColor: item.active ? componentTheme.active?.background : opacity(componentTheme.default?.background, 5),
              borderColor: componentTheme[item.active ? 'active' : 'default']?.border,
              paddingHorizontal: size === 'small' ? 10 : 20,
              paddingVertical: size === 'small' ? 5 : 10,
            },
            styles.containerStyle,
            index < buttonList.length - 1 ? { borderRightWidth: 0 } : { borderRightWidth: 1 },
            index === 0 ? { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 } : null,
            index === buttonList.length - 1 ? { borderTopRightRadius: 5, borderBottomRightRadius: 5 } : null,

          ]}
        >
          <Text style={
            [
              size === 'small' ? typography?.body.smedium : typography?.body.medium,
              { color: componentTheme[item.active ? 'active' : 'default']?.label },
            ]
          }
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default applyDefaults(ToggleButton);

const styles = StyleSheet.create({
  containerStyle: { borderWidth: 1 },
});
