import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  StyleSheet,
} from 'react-native';
import Text from '../components/Text';

const components = [
  'AccordionList',
  'ActivityIndicator',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'Button',
  'CheckBox',
  'Chip',
  'Divider',
  'Dropdown',
  'Menu',
  'PagerView',
  'ProgressBar',
  'RadioButton',
  'Slider',
  'SpeedDial',
  'Switch',
  'TextInput',
  'ToggleButton',
  'Icon',
  'Swipe',
];

const ComponentCard = ({ name, onPress }) => {
  const initials = name
    .split(/(?=[A-Z])/)
    .map((p) => p[0])
    .slice(0, 2)
    .join('');

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{initials}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return components;
    const q = query.trim().toLowerCase();
    return components.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kitra UI</Text>
        <Text style={styles.subtitle}>Components playground — pick a component to preview</Text>
      </View>

      <RNTextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search components..."
        placeholderTextColor="#8b8f98"
        style={styles.search}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <ComponentCard name={item} onPress={() => navigation.navigate(item)} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyText}>No components match "{query}"</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  search: {
    height: 44,
    marginHorizontal: 16,
    marginTop: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  listContent: {
    padding: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#eef2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#4f46e5',
    fontWeight: '700',
  },
  cardBody: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    color: '#111827',
  },
  emptyWrap: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    color: '#6b7280',
  },
});

export default Home;
