import { View } from 'react-native';
import { Dropdown, Icon } from '@tra-tech/react-native-kitra';
import Divider from '../components/Divider';
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
  <Layout>
    <View style={{ zIndex: 10 }}>
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => `${x.name} ${x.activeYears}`}
        onSelect={x => console.log(x)}
      />
    </View>
    <View style={{ zIndex: 9 }}>
      <Divider label="Disabled" />
      <Dropdown
        disabled
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => `${x.name} ${x.activeYears}`}
        onSelect={x => console.log(x)}
      />
    </View>
    <View style={{ zIndex: 8 }}>
      <Divider label="Left - Right Elements" />
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => `${x.name} ${x.activeYears}`}
        onSelect={x => console.log(x)}
        left={<Icon type="font-awesome-5" color="black" name="guitar" size={18} />}
      />
    </View>
    <View style={{ zIndex: 7 }}>
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => `${x.name} ${x.activeYears}`}
        onSelect={x => console.log(x)}
        right={<Icon type="ant-design" style={{ marginRight: 15 }} color="black" name="down" size={10} />}
      />
    </View>
    <View style={{ zIndex: 6 }}>
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => `${x.name} ${x.activeYears}`}
        onSelect={x => console.log(x)}
        left={<Icon type="font-awesome-5" color="black" name="guitar" size={18} />}
        right={<Icon type="ant-design" style={{ marginRight: 15 }} color="black" name="down" size={10} />}
      />
    </View>
    <Divider label="Customized" />
    <Dropdown
      data={data}
      defaultValue={data[1]}
      onSelect={x => console.log(x)}
      rowStyle={{ backgroundColor: 'white' }}
      listContainerStyle={{ backgroundColor: 'black' }}
      displayedButtonValue={x => x.name}
      iconStyle={{ color: 'white' }}
      buttonBackgrounColor={{ focusBackground: 'black', defaultBackground: 'black' }}
      displayedRowValue={x => `${x.name} ${x.activeYears}`}
      buttonTitle="Select a band"
      left={<Icon type="font-awesome-5" color="white" name="guitar" size={18} />}
      buttonTextStyle={{ color: 'white' }}
      rowTextStyle={{ color: 'purple' }}
    />
    <Divider label="Multiple Select" />
    <View style={{ rowGap: 10 }}>
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
      />
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
      />
    </View>
  </Layout>
);

export default DropdownScreen;
