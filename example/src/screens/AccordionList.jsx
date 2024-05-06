import { AccordionList, Icon } from '@tra-tech/react-native-kitra';
import { StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const Data = [
  { name: 'Sometimes, things just seem to fall apart', points: '$3.45' },
  { name: 'When you least expect them to', points: '$3.45' },
  { name: 'Sometimes you want to pack up and leave behind', points: '$3.45' },
  { name: 'All of them and their smiles', points: '$3.45' }];

const AccordionListIcon = () => (<Icon type="material-community" name="flower-tulip" size={24} color="dimgrey" />);

const AccordionListScreen = () => (
  <Layout>
    <Divider label="Default" />
    <AccordionList
      data={Data}
      onExpand={() => console.log('Acordion list open')}
      itemDisplay={x => x.name}
      label="Grey Daze"
      left={AccordionListIcon}
    />
    <Divider label="Custom Theme" />
    <AccordionList
      data={Data}
      displayedItem={x => x.name}
      onExpand={() => console.log('Acordion list open')}
      itemDisplay={x => x.name}
      onSelect={x => console.log(x)}
      label="Grey Daze"
      left={AccordionListIcon}
      right={AccordionListIcon}
      theme={{
        active: { background: 'orange',
          collapseIcon: 'white',
          collapseIconBackground: 'purple',
          icon: 'green',
          itemBackground: 'yellow',
          itemLabel: 'brown',
          label: 'white' },
        default: { background: 'blue',
          collapseIcon: 'yellow',
          collapseIconBackground: 'orange',
          icon: 'purple',
          itemBackground: 'yellow',
          itemLabel: 'brown',
          label: 'white' },
      }}
    />
  </Layout>
);

export default AccordionListScreen;
