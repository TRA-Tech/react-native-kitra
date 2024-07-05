import { AccordionList, Icon } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';

const Data = [
  { name: 'Sometimes, things just seem to fall apart', points: '$3.45' },
  { name: 'When you least expect them to', points: '$3.45' },
  { name: 'Sometimes you want to pack up and leave behind', points: '$3.45' },
  { name: 'All of them and their smiles', points: '$3.45' }];

const AccordionListLeftIcon = () => (<Icon type="material-community" name="flower-tulip" size={24} color="white" />);
const AccordionListRightIcon = () => (<Icon type="material-community" name="flower-tulip" size={24} color="white" style={{ marginRight: 10 }} />);

const AccordionListScreen = () => (
  <Layout>
    <View style={{ rowGap: 10 }}>
      <Text style={styles.headerText}>Default</Text>
      <AccordionList
        data={Data}
        onExpand={() => console.log('Acordion list open')}
        itemDisplay={x => x.name}
        label="Grey Daze"
        left={AccordionListLeftIcon}
      />
      <Text style={styles.headerText}>Custom Theme</Text>
      <AccordionList
        data={Data}
        displayedItem={x => x.name}
        onExpand={() => console.log('Acordion list open')}
        itemDisplay={x => x.name}
        onSelect={x => console.log(x)}
        label="Grey Daze"
        left={AccordionListLeftIcon}
        right={AccordionListRightIcon}
        theme={{
          active: { background: '#E6EEFF',
            collapseIcon: '#195CEF',
            collapseIconBackground: 'white',
            icon: 'white',
            itemBackground: '#F6F9FF',
            itemLabel: '#124CCA',
            label: '#195CEF' },
          default: { background: '#124CCA',
            collapseIcon: '#195CEF',
            collapseIconBackground: '#E6EEFF',
            icon: 'white',
            itemBackground: '#E6EEFF',
            itemLabel: 'white',
            label: 'white' },
        }}
      />
    </View>
  </Layout>
);

export default AccordionListScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
