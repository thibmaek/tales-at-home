import React, { Component, PropTypes } from 'react';
import { View, ListView, TouchableHighlight } from 'react-native';

import Button from 'apsl-react-native-button';

import FamilyItem from 'src/components/FamilyItem';

import globalStyle from 'src/assets/styles/GlobalStyle';
import { highLightNeutral } from 'src/assets/styles/vars';
import { sidebar, button } from 'src/assets/styles/components/Sidebar';

export default class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      active: null,
      archived: null,
    };
  }

  componentWillMount() {
    const active = this.props.families.filter(f => f.active);
    this.setState({ active });
  }

  _setActive(key) {
    console.log(key);
  }

  render() {
    return (
      <View style={sidebar}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.state.active)}
          renderRow={family => (
            <TouchableHighlight
              onPress={this._setActive.bind(this, family.key)}
              underlayColor={highLightNeutral}>
              <FamilyItem key={family.key} {...family} />
            </TouchableHighlight>
          )}
        />
        <Button
          style={button.bg} textStyle={[globalStyle, button.text]}
        >
          nieuw gezin aanmaken
        </Button>
      </View>
    );
  }

  static propTypes = {
    families: PropTypes.any.isRequired,
  }
}
