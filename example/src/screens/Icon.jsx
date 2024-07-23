import { Icon } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';

const IconScreen = () => (
  <Layout scroll>
    <View style={{ rowGap: 15 }}>
      <Text style={styles.headerText}>Ant Design</Text>
      <Icon size={30} type="ant-design" name="antdesign" />

      <Text style={styles.headerText}>Entypo</Text>
      <Icon size={30} type="entypo" name="circle" />

      <Text style={styles.headerText}>Evil Icons</Text>
      <Icon size={30} type="evilicon" name="unlock" />

      <Text style={styles.headerText}>Feather</Text>
      <Icon size={30} type="feather" name="feather" />

      <Text style={styles.headerText}>FontAwesome</Text>
      <Icon size={30} type="font-awesome" name="font-awesome" />

      <Text style={styles.headerText}>FontAwesome5</Text>
      <Icon size={30} type="font-awesome-5" name="font-awesome" />

      <Text style={styles.headerText}>Fontisto</Text>
      <Icon size={30} type="fontisto" name="fontisto" />

      <Text style={styles.headerText}>Foundation</Text>
      <Icon size={30} type="foundation" name="social-zurb" />

      <Text style={styles.headerText}>Ionicons</Text>
      <Icon size={30} type="ionicon" name="logo-ionic" />

      <Text style={styles.headerText}>MaterialCommunityIcons</Text>
      <Icon size={30} type="material-community" name="material-design" />

      <Text style={styles.headerText}>MaterialIcons</Text>
      <Icon size={30} type="material" name="settings" />

      <Text style={styles.headerText}>Octicons</Text>
      <Icon size={30} type="octicon" name="mark-github" />

      <Text style={styles.headerText}>SimpleLineIcons</Text>
      <Icon size={30} type="simple-line-icon" name="user" />

      <Text style={styles.headerText}>Zocial</Text>
      <Icon size={30} type="zocial" name="facebook" />
    </View>
  </Layout>
);

export default IconScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
