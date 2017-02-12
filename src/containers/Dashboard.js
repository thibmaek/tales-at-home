import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Loading, Families, Results, NewFamily } from 'src/containers/';
import { NavigationBar, Sidebar, ActionMenu, Alert } from 'src/components/';

import { Database, Auth } from 'src/config/firebase';

import s from 'src/assets/styles/containers/Dashboard';
import sSidebar from 'src/assets/styles/components/Sidebar';

const LOGOUT_ACTION = {
  title: `uitloggen`,
  func: () => Auth.signOut().then(Actions.rootScene),
};

const ARCHIVE_ACTION = {
  title: `Archiveer familie`,
  func: () => this._archiveFamily(),
};

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`families`);
    this.state = {
      displayAlert: false,
      alertAction: null,
    };
  }

  componentDidMount() {
    this._getFamilies();
  }

  _getFamilies() {
    this.ref.once(`value`)
      .then(snap => {
        const families = [];
        snap.forEach(data => {
          families.push({ ...data.val(), key: data.key });
        });

        let selectedFamily = null;
        this.props.selectedFamily
          ? selectedFamily = this.props.selectedFamily
          : selectedFamily = families[0].key;

        this.setState({ families, selectedFamily });
      })
      .catch(e => console.error(e));
  }

  _setSelectedFamily(selectedFamily) {
    this.setState({ selectedFamily });
  }

  _renderLoading = () => <Loading title='Families aan het ophalen…' />

  _renderSidebar() {
    const NEUTRAL_TYPE = {
      type: `neutral`,
      text: `nieuw gezin aanmaken`,
      handler: Actions.dashboardScene_new,
    };

    return (
      !this.props.addFamily
        ? <Sidebar action={NEUTRAL_TYPE}>
            <Families
              style={sSidebar.children}
              families={this.state.families}
              selectedFamily={this.state.selectedFamily}
              didSelectFamily={key => this._setSelectedFamily(key)}
              onPress={() => this._toggleAlert()}
            />
          </Sidebar>
        : <Sidebar><NewFamily /></Sidebar>
    );
  }

  _renderView() {
    const { selectedFamily } = this.state;
    return (
      <View style={s.view}>
        { this._renderSidebar() }
        { this.props.dimmed ? <View style={s.dimmed}></View> : null }
        <Results selectedFamily={selectedFamily} />
        <ActionMenu selectedFamily={selectedFamily} />
      </View>
    );
  }

  _toggleAlert() {
    this.setState({
      alertAction: `Uitloggen`,
      displayAlert: !this.state.displayAlert,
    });
  }

  _closeAlert() {
    this.setState({
      alertAction: null,
      displayAlert: !this.state.displayAlert,
    });
  }

  _renderAlert(action) {
    switch (action) {
    case `Uitloggen`:
      return (
        <Alert
          title='Uitloggen'
          action={LOGOUT_ACTION}
          side='right'
          closeAction={() => this._closeAlert()}>
          Door af te melden heb je geen toegang tot alle huidige sessies & resultaten.
          Ben je zeker dat je wilt doorgaan?
        </Alert>
      );
    case `Archiveren`:
      return (
        <Alert title='Archiveren' action={ARCHIVE_ACTION} side='right'>
          Door af te melden heb je geen toegang tot alle huidige sessies & resultaten.
          Ben je zeker dat je wilt doorgaan?
        </Alert>
      );
    default:
      return null;
    }
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        {this._renderAlert(this.state.alertAction)}
        <NavigationBar title='Dashboard' action='SEARCH' onPress={() => this._toggleAlert()} />
        { this.state.families  ? this._renderView() : this._renderLoading() }
      </View>
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string,
    dimmed: PropTypes.bool,
    addFamily: PropTypes.bool,
  }
}
