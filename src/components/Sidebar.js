import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';

import Button from 'apsl-react-native-button';

import FamilyItem from 'src/components/FamilyItem';

import globalStyle from 'src/assets/styles/GlobalStyle';
import { sidebar, button } from 'src/assets/styles/components/Sidebar';

export default class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  handleCreateFamily(e) {
    console.log(e);
  }

  render() {
    return (
      <View style={sidebar}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.families)}
          renderRow={family => <FamilyItem key={family.key} {...family} />}
        />
        <Button onPress={this.handleCreateFamily} style={button.bg} textStyle={[globalStyle, button.text]}>
          nieuw gezin aanmaken
        </Button>
      </View>
    );
  }

  static propTypes = {
    families: PropTypes.array.isRequired,
  }
}
