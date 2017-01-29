import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';

import FamilyItem from 'src/components/FamilyItem';

import { sidebar } from 'src/assets/styles/components/Sidebar';

export default class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  render() {
    return (
      <View style={sidebar}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.families)}
          renderRow={family => <FamilyItem key={family.key} {...family} />}
        />
      </View>
    );
  }

  static propTypes = {
    families: PropTypes.array.isRequired,
  }
}
