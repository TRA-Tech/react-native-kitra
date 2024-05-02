import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Layout = ({ children, scroll, style }) => {
  const insets = useSafeAreaInsets();
  return (
    scroll ? (
      <ScrollView
        bounces={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
        style={[styles.container]}
      >
        {children}
      </ScrollView>
    ) : <View style={[styles.container, style]}>{children}</View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});
