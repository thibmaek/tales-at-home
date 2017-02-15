import React from 'react';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <Video repeat resizeMode='cover'
    source={require(`src/assets/video/playground.mp4`)}
    style={{ width: 1024, height: 768 }}
  />
  );
};

export default VideoPlayer;

// import { StatusBar, View, TouchableWithoutFeedback, Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import DynamicButton from 'rndynamicbutton';
//
// import s from 'src/assets/styles/containers/UserPicker';
// import professionalChar from 'src/assets/img/chars/professionalChar.png';
// import familyChars from 'src/assets/img/chars/familyChars.png';
//
// const AUTH_REGISTER = { action: `registreren`, title: `registreren`, method: `register` };
//
// const UserPicker = () => (
//   <View style={s.container}>
//     <StatusBar hidden={true} />
//     <View style={s.buttonsContainer}>
//       <View style={s.professionalContainer}>
//         <TouchableWithoutFeedback onPress={() => Actions.setupScene({ authType: AUTH_REGISTER })}>
//           <View style={s.professionalInnerContainer}>
//             <Image source={professionalChar} style={s.char} />
//             <DynamicButton touchable='highlight' style={s.button} textStyle={s.buttonText}
//               action={() => Actions.setupScene({ authType: AUTH_REGISTER })}>
//               Ik ben een professional
//             </DynamicButton>
//           </View>
//         </TouchableWithoutFeedback>
//       </View>
//       <View style={s.familyContainer}>
//         <TouchableWithoutFeedback onPress={() => Actions.connectionScene}>
//           <View style={s.familyInnerContainer}>
//             <Image source={familyChars} style={s.char} />
//             <DynamicButton touchable='highlight' style={s.button}
//               textStyle={s.buttonText} action={() => Actions.connectionScene()}
//             >
//               Ik ben een gezinslid
//             </DynamicButton>
//           </View>
//         </TouchableWithoutFeedback>
//       </View>
//     </View>
//   </View>
// );
//
// export default UserPicker;
