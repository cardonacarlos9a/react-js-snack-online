import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-elements'; // 0.19.1

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Card title="Vista uno">
            <Text style={styles.paragraph}>test</Text>
          </Card>
        </View>
        <View>
          <Card title="Vista dos">
            <Text style={styles.paragraph}>test</Text>
          </Card>
        </View>
        <View>
          <Card title="Vista tres">
            <Text style={styles.paragraph}>test</Text>
          </Card>
        </View>
        <Button style={styles.button}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button:{
    marginTop:20
  }
});
