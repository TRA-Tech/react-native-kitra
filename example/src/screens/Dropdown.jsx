import { StyleSheet, Text, View } from 'react-native';
import { Dropdown, Icon } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const data = [
  {
    id: 1,
    name: 'The Beatles',
    activeYears: '1960-1970',
    members: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
  },
  {
    id: 2,
    name: 'The Rolling Stones',
    activeYears: '1962-present',
    members: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
  },
  {
    id: 3,
    name: 'Led Zeppelin',
    activeYears: '1968-1980',
    members: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham'],
  },
  {
    id: 4,
    name: 'Pink Floyd',
    activeYears: '1965-1995, 2005, 2012-2014',
    members: ['Syd Barrett', 'Nick Mason', 'Roger Waters', 'Richard Wright', 'David Gilmour'],
  },
  {
    id: 5,
    name: 'The Who',
    activeYears: '1964-present',
    members: ['Roger Daltrey', 'Pete Townshend', 'John Entwistle', 'Keith Moon'],
  },
  {
    id: 6,
    name: 'Queen',
    activeYears: '1970-present',
    members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
  },
];

const DropdownScreen = () => (
  <Layout scroll>
    <View style={{ rowGap: 15 }}>
      <Text style={styles.headerText}>Default</Text>
      <View style={{ zIndex: 10 }}>
        <Dropdown
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => `${x.name} ${x.activeYears}`}
          onSelect={x => console.log(x)}
        />
      </View>

      <View style={{ zIndex: 9, rowGap: 15 }}>
        <Text style={styles.headerText}>Disabled</Text>
        <Dropdown
          disabled
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => `${x.name} ${x.activeYears}`}
          onSelect={x => console.log(x)}
        />
      </View>

      <View style={{ rowGap: 15, zIndex: 8 }}>
        <View style={{ zIndex: 8, rowGap: 15 }}>
          <Text style={styles.headerText}>Left - Right Elements</Text>
          <Dropdown
            data={data}
            displayedButtonValue={x => x.name}
            displayedRowValue={x => `${x.name} ${x.activeYears}`}
            onSelect={x => console.log(x)}
            right={<Icon type="font-awesome-5" color="black" name="guitar" size={18} />}
          />
        </View>
        <View style={{ zIndex: 7 }}>
          <Dropdown
            data={data}
            displayedButtonValue={x => x.name}
            displayedRowValue={x => `${x.name} ${x.activeYears}`}
            onSelect={x => console.log(x)}
            right={<Icon type="ant-design" color="black" name="down" size={10} />}
          />
        </View>
        <View style={{ zIndex: 6 }}>
          <Dropdown
            data={data}
            displayedButtonValue={x => x.name}
            displayedRowValue={x => `${x.name} ${x.activeYears}`}
            onSelect={x => console.log(x)}
            left={<Icon type="font-awesome-5" color="black" name="guitar" size={18} />}
            right={<Icon type="ant-design" color="black" name="down" size={10} />}
          />
        </View>
      </View>
      <Text style={styles.headerText}>Custom Theme</Text>
      <Dropdown
        theme={{
          default: {
            background: '#124CCA',
            border: '#F6F9FF',
            checkBackground: '#F6F9FF',
            checkBorder: '#F6F9FF',
            checkIcon: '#F6F9FF',
            collapseBackground: '#F6F9FF',
            collapseIcon: 'white',
            completeBackground: '#F6F9FF',
            completeLabel: '#F6F9FF',
            itemBackground: '#F6F9FF',
            itemLabel: '#F6F9FF',
            label: 'white',
            selectAllLabel: 'white',
          },
          selected: {
            background: '#195CEF',
            border: '#F6F9FF',
            checkBackground: 'white',
            checkBorder: '#F6F9FF',
            checkIcon: '#F6F9FF',
            collapseBackground: '#124CCA',
            collapseIcon: 'white',
            completeBackground: '#F6F9FF',
            completeLabel: '#F6F9FF',
            itemBackground: '#124CCA',
            itemLabel: 'white',
            label: '#F6F9FF',
            selectAllLabel: '#F6F9FF',
          },
          active: {
            background: '#F6F9FF',
            border: '#195CEF',
            checkBackground: '#195CEF',
            checkBorder: '#195CEF',
            checkIcon: '#195CEF',
            collapseBackground: '#195CEF',
            collapseIcon: '#195CEF',
            completeBackground: '#195CEF',
            completeLabel: '#195CEF',
            itemBackground: '#195CEF',
            itemLabel: 'white',
            label: '#195CEF',
            selectAllLabel: '#195CEF',
          },
        }}
        data={data}
        onSelect={x => console.log(x)}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => `${x.name} ${x.activeYears}`}
        buttonTitle="Select a band"
        left={<Icon type="font-awesome-5" color="blue" name="guitar" size={18} />}
      />

      <Text style={styles.headerText}>Multiple Select</Text>
      <View style={{ rowGap: 10, zIndex: 100 }}>
        <Dropdown
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => `${x.name} ${x.activeYears}`}
          multiple
        />

        <Text style={styles.headerText}>Multiple Select All</Text>
        <Dropdown
          data={data}
          onSelect={x => console.log(x)}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => `${x.name} ${x.activeYears}`}
          buttonTitle="Select a band"
          displayLength={3}
          multiple
          selectall
          onComplete={x => console.log(x)}
          left={<Icon type="font-awesome-5" color="black" name="guitar" size={18} />}
        />
        <Dropdown
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => `${x.name} ${x.activeYears}`}
          onSelect={x => console.log(x)}
          left={<Icon type="font-awesome-5" color="black" name="guitar" size={18} />}
        />
      </View>
    </View>

  </Layout>
);

export default DropdownScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
