import React, { Component, PropTypes } from 'react';
import { ListView, TouchableHighlight, View, TextInput } from 'react-native';

import { FamilyItem } from 'src/components/';

import s from 'src/assets/styles/containers/Dashboard';

import { highLightNeutral } from 'src/assets/styles/vars';

export default class Families extends Component {
  constructor(props, context) {
    super(props, context);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {};
  }

  componentWillMount() {
    const active = this.props.families.filter(f => f.active);
    this.setState({ active });
  }

  _updateSearch(e) {
    const searchText = e.nativeEvent.text;
    this.setState({ searchText });

    const filteredData  = this.state.active.filter(
      family => {
        return family.name.indexOf(e.nativeEvent.text) !== - 1;
      }
    );
    //
    this.setState({
      active: this.ds.cloneWithRows(filteredData),
    });
  }

  shouldHighlight = key => key === this.props.selectedFamily ? true : false

  render() {
    return (
      <View>
        <View style={s.searchContainer}>
          <TextInput style={s.input} placeholder='Zoek een gezin'
            value={this.state.searchText}
            onChange={e => this._updateSearch(e)} />
        </View>
        <ListView
          dataSource={this.ds.cloneWithRows(this.state.active)}
          renderRow={family => (
            <TouchableHighlight
              onPress={() => this.props.didSelectFamily(family.key)}
              underlayColor={highLightNeutral}
            >
              <FamilyItem
                key={family.key}
                shouldHighlight={this.shouldHighlight(family.key)}
                {...family}
              />
            </TouchableHighlight>
          )}
        />
    </View>
    );
  }

  static propTypes = {
    families: PropTypes.any.isRequired,
    selectedFamily: PropTypes.string,
    didSelectFamily: PropTypes.func.isRequired,
  }
}
