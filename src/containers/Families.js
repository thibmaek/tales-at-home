import React, { Component, PropTypes } from 'react';
import { ListView, TouchableHighlight, View, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Database } from 'src/config/firebase';
import { FamilyItem } from 'src/components/';

import s from 'src/assets/styles/components/FamilyItem';
import { accentYellow, highLightNeutral } from 'src/assets/styles/vars';

export default class Families extends Component {
  constructor(props, context) {
    super(props, context);
    this.ref = Database.ref(`families`);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {};
  }

  componentWillMount() {
    const active = this.props.families.filter(f => f.active);
    this.setState({ active });
  }

  _archiveFamily(key, secId, rowId, rowMap) {
    this.ref.child(`${key}`)
      .update({ active: false })
      .then(() => {
        rowMap[`${secId}${rowId}`].closeRow();
        this.setState({
          active: this.state.active.filter(family => family.key !== key),
        });
      })
      .catch(e => console.error(e));
  }

  shouldHighlight = key => key === this.props.selectedFamily ? true : false

  render() {
    return (
      <SwipeListView dataSource={this.ds.cloneWithRows(this.state.active)}
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
        renderHiddenRow={(family, secId, rowId, rowMap) => (
          <View style={s.archiveRow}>
            <TouchableHighlight style={s.archiveButton} underlayColor={accentYellow}
              onPress={() => this._archiveFamily(family.key, secId, rowId, rowMap)} >
              <Text style={s.buttonText}>Archiveren</Text>
            </TouchableHighlight>
          </View>
        )}
        disableRightSwipe
        rightOpenValue={- 85}
      />
    );
  }

  static propTypes = {
    families: PropTypes.any.isRequired,
    selectedFamily: PropTypes.string,
    didSelectFamily: PropTypes.func.isRequired,
  }
}
