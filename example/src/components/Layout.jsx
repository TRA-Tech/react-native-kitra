import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Layout = ({ children, scroll, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: '#F6F9FF', flex: 1, paddingHorizontal: 10 }}>
      { scroll ? (
        <ScrollView
          bounces={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
          style={[styles.container]}
        >
          {children}
        </ScrollView>
      ) :
        <View style={[styles.container, style]}>{children}</View>}
    </View>

  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 30,
  },
});
