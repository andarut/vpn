import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OpenVPN from 'react-native-simple-openvpn'; // Import the OpenVPN library
import RNFS from 'react-native-fs'; // Import react-native-fs to handle file system

const { height } = Dimensions.get('window');

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState('0'); // Default to Fastest

  const servers = [
    { id: '0', name: '🚀 Fastest' },
    { id: '1', name: '🇺🇸 United States' },
    { id: '2', name: '🇩🇪 Germany' },
    { id: '3', name: '🇯🇵 Japan' },
    { id: '4', name: '🇦🇺 Australia' },
    { id: '5', name: '🇬🇧 United Kingdom' },
    { id: '6', name: '🇨🇦 Canada' },
    { id: '7', name: '🇫🇷 France' },
    { id: '8', name: '🇧🇷 Brazil' },
    { id: '9', name: '🇮🇹 Italy' },
    { id: '10', name: '🇪🇸 Spain' },
    { id: '11', name: '🇫🇮 Finland' },
    { id: '12', name: '🇳🇱 Netherlands' },
    { id: '13', name: '🇸🇪 Sweden' },
    { id: '14', name: '🇲🇽 Mexico' }
  ];

  const renderServerItem = ({ item }: { item: typeof servers[0] }) => (
    <TouchableOpacity
      style={[
        styles.serverItem,
        selectedServer === item.id && styles.selectedServer,
        // item.id !== '0' && styles.disabledServer, // Apply disabled style
      ]}
      onPress={() => {
        // Only allow selecting "Fastest"
        // if (item.id === '0') {
          // setSelectedServer(item.id);
        // }
        setSelectedServer(item.id);
      }}
      // disabled={item.id !== '0'} // Disable all options except Fastest
    >
      <Text style={styles.serverName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>VPN</Text>
      <Text style={styles.statusText}>
        {isConnected ? 'Connected to ' + (selectedServer ? servers.find(s => s.id === selectedServer)?.name : 'a server') : 'Disconnected'}
      </Text>
    </View>
  );

  const handleConnect = async () => {
    console.log(RNFS.DocumentDirectoryPath);
    // const filePath = `${RNFS.DocumentDirectoryPath}/your-config-file.ovpn`; // Adjust the path as necessary
    try {
      // const data = await RNFS.readFile(filePath, 'utf8');
      // await OpenVPN.connect({ ovpn: data }); // Connect using the .ovpn file data
      setIsConnected(true);
    } catch (error) {
      console.error('VPN Connection Error:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await OpenVPN.disconnect();
      setIsConnected(false);
    } catch (error) {
      console.error('VPN Disconnection Error:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#0A0E21', '#1F1F3D']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <FlatList
          data={servers}
          renderItem={renderServerItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[styles.serverList, { paddingBottom: 250 }]}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={isConnected ? handleDisconnect : handleConnect}
            style={[
              styles.connectButton,
              isConnected ? styles.connectedButton : styles.disconnectedButton,
            ]}
          >
            <Text style={styles.connectButtonText}>
              {isConnected ? '🚀' : '🚀'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 20,
  },
  gradient: {
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  connectButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectedButton: {
    backgroundColor: '#5cb85c',
  },
  disconnectedButton: {
    backgroundColor: '#d9534f',
  },
  connectButtonText: {
    fontSize: 50,
    color: '#FFFFFF',
  },
  serverList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  serverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  selectedServer: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
  },
  disabledServer: {
    opacity: 0.5, // Make disabled servers more transparent
  },
  serverName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default App;