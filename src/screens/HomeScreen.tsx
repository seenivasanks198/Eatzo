import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome to Eatzo</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Today's Special</Text>
          <Text style={styles.bannerSubtitle}>
            Get 20% off on your first order
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesRow}>
          {['Pizza', 'Burger', 'Sushi', 'Salad'].map((cat) => (
            <View key={cat} style={styles.categoryCard}>
              <Text style={styles.categoryText}>{cat}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Popular Items</Text>
        {['Margherita Pizza', 'Classic Burger', 'California Roll'].map(
          (item) => (
            <View key={item} style={styles.itemCard}>
              <Text style={styles.itemName}>{item}</Text>
              <Text style={styles.itemPrice}>$12.99</Text>
            </View>
          ),
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FF6B35',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsIcon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  banner: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B35',
  },
});
