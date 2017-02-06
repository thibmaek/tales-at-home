import React, { Component, PropTypes } from 'react';
import { ListView, TouchableHighlight } from 'react-native';

import { FamilyItem } from 'src/components/';

import { highLightNeutral } from 'src/assets/styles/vars';

export default class Families extends Component {
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
      <ListView
        dataSource={this.ds.cloneWithRows(this.state.active)}
        renderRow={family => (
          <TouchableHighlight
            onPress={() => this._setActive(family.key)}
            underlayColor={highLightNeutral}>
            <FamilyItem key={family.key} {...family} />
          </TouchableHighlight>
        )}
      />
    );
  }

  static propTypes = {
    families: PropTypes.any.isRequired,
  }
}
