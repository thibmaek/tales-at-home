import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Database } from 'src/config/firebase';

import { Loading, Families, Results, NewFamily } from 'src/containers/';
import { NavigationBar, Sidebar, ActionMenu, SessionOption  } from 'src/components/';

import s from 'src/assets/styles/containers/Dashboard';
import { familyMembers } from 'src/assets/mockedData';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.familyRef = Database.ref(`/families`);
    this.sessionRef = Database.ref(`/sessions`);
    this.state = {
      families: null,
      sessionOptions: null,
    };
  }

  componentDidMount() {
    this._getFamilies(this.familyRef);
    this._getSessionList(this.sessionRef);
  }

  _getFamilies(ref) {
    ref.on(`value`, snapshot => {
      const families = [];
      snapshot.forEach(data => {
        families.push(data.val());
      });

      this.setState({ families });
    });
  }

  _getSessionList(ref) {
    ref.once(`value`)
      .then(snapshot => {
        const sessionOptions = [];
        snapshot.forEach(data => {
          sessionOptions.push(data.val());
        });

        this.setState({ sessionOptions });
      });
  }

  _renderLoading() {
    return (<Loading title='Families aan het ophalen…' />);
  }

  _renderSidebar() {
    const NEUTRAL_TYPE = {
      type: `neutral`,
      text: `nieuw gezin aanmaken`,
      handler: Actions.dashboardScene_new,
    };
    
    return (
      !this.props.addFamily
      ? <Sidebar action={NEUTRAL_TYPE}><Families families={this.state.families} /></Sidebar>
      : <Sidebar><NewFamily /></Sidebar>
    );
  }

  _renderView() {
    const { families, sessionOptions } = this.state;
    
    return (
      <View style={s.view}>
        {this._renderSidebar(true)}
        {this.props.dimmed ? <View style={s.dimmed}></View> : null}
        <Sidebar action={{ type: `Neutral`, text: `nieuw gezin aanmaken` }}>
          <Families families={families} />
        </Sidebar>
        <Results familyMembers={familyMembers} />
        <ActionMenu sessionOptions={sessionOptions} />
      </View>
    );
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' />
        { this.state.families ? this._renderView() : this._renderLoading() }
      </View>
    );
  }

  static propTypes = {
    dimmed: PropTypes.bool,
    addFamily: PropTypes.bool,
  }
}
