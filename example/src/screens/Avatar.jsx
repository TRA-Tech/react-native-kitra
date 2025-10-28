import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Badge, Icon } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const AvatarScreen = () => (
  <Layout scroll>
    <View style={{ rowGap: 15 }}>
      <Text style={styles.headerText}>Default</Text>
      <Avatar />
      <Text style={styles.headerText}>Custom Theme</Text>
      <Avatar
        theme={{
          default: { background: '#195CEF', label: '#ffff' },
        }}
        variant="rounded"
      />
      <Text style={styles.headerText}>Rounded</Text>
      <Avatar variant="rounded" />

      <Text style={styles.headerText}>With Icon</Text>
  <Avatar avatarIcon={<Icon name="user" size={30} />} />

      <Text style={styles.headerText}>With Label</Text>
      <Avatar
        variant="rounded"
        label="John Doe"
  avatarIcon={<Icon name="user" size={30} />}
      />

      <Text style={styles.headerText}>Sizes S-M</Text>
      <View style={{ flexDirection: 'row', columnGap: 10 }}>
        <Avatar
          size="small"
          label="John Doe"
          avatarIcon={<Icon name="user" size={30} />}
        />
        <Avatar
          variant="rounded"
          size="medium"
          label="John Doe"
          avatarIcon={(
            <Icon
              name="user"
              size={30}
            />
)}
        />
      </View>
      <Text style={styles.headerText}>With Image</Text>
      <Avatar
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_75gFTnTdEo-gYx6kpjQ7bPkcUH_L4CUXMWRn1jPhBzjgXQp-Z_QGNZ7togU2K03bYwc&usqp=CAU' }}
        variant="rounded"
        label="John Doe"
  avatarIcon={<Icon name="user" size={30} />}
      />

      <Text style={styles.headerText}>With Badge and Image</Text>
      <Badge badgePosition="topRight" label="ADS">
        <Avatar
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_75gFTnTdEo-gYx6kpjQ7bPkcUH_L4CUXMWRn1jPhBzjgXQp-Z_QGNZ7togU2K03bYwc&usqp=CAU' }}
          borderStyle="circular"
          label="John Doe"
          avatarIcon={<Icon name="user" size={30} />}
        />
      </Badge>
    </View>
  </Layout>
);

export default AvatarScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
