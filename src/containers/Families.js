import React, { Component, PropTypes } from 'react';
import { ListView, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Database } from 'src/config/firebase';
import { FamilyItem } from 'src/components/';

import s from 'src/assets/styles/components/FamilyItem';
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

  _archiveFamily(FamilyId, secId, rowId, rowMap) {
    Database.ref(`/families/${FamilyId}`)
      .update({ active: false })
      .then(() => {
        rowMap[`${secId}${rowId}`].closeRow();
        this.setState({
          active: this.state.active.filter(family => family.key !== FamilyId),
        });
      }).catch(e => e);
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
            <TouchableOpacity style={s.archiveButton}
              onPress={() => this._archiveFamily(family.key, secId, rowId, rowMap)} >
              <Text style={s.buttonText}>Archive</Text>
            </TouchableOpacity>
          </View>
        )}
        disableRightSwipe
        rightOpenValue={- 75}
      />
    );
  }

  static propTypes = {
    families: PropTypes.any.isRequired,
    selectedFamily: PropTypes.string,
    didSelectFamily: PropTypes.func.isRequired,
  }
}


{/* <ListView
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
/> */}
