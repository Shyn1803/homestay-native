/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  // View,
  // Text,
  StatusBar,
  TextInput,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
// import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      style={styles.searchInput}
    />
  );
};

const App = () => {
  // const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.bodyContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <UselessTextInput
            onChangeText={(text) => onChangeText(text)}
            value={value}
            defaultValue="Searching"
          /> */}
          <Searchbar placeholder="Search" />
          {/* <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
          </Container> */}
          {/* <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    // backgroundColor: '#19181E',
  },

  searchInput: {
    color: '#000000',
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    height: 56,
    // paddingTop: 16,
    paddingLeft: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#19181E',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: Colors.red,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.lighter,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
