 import { StyleSheet } from 'react-native';
 import { white, accentBlue, fontIsTitle, fontIsLabel } from 'src/assets/styles/vars';

 export default StyleSheet.create({
   container: {
     flexDirection: `column`,
     flex: 1,
   },
   loginContainer: {
     flexDirection: `column`, alignItems: `center`,
     flex: 1,
   },
   loginTopContainer: {
     flexDirection: `column`,
     alignItems: `center`,
     justifyContent: `center`,
     flex: 1,
   },
   title: {
     marginBottom: 75,
     ...fontIsTitle, fontSize: 50, fontWeight: `bold`,
     color: white,
     backgroundColor: `transparent`,
   },
   textInput: {
     width: 280,
     marginBottom: 20,
     borderBottomColor: white, borderBottomWidth: 1, borderStyle: `solid`,
   },
   input: {
     height: 30,
     color: white,
     marginTop: 30,
   },
   button: {
     width: 280,
     backgroundColor: white,
     borderWidth: 0, borderRadius: 50,
   },
   buttonText: {
     fontWeight: `bold`,
     color: accentBlue,
   },
   anonLogin: {
     marginBottom: 50,
     borderBottomColor: white,
     borderBottomWidth: 0.5,
     borderStyle: `solid`,
     backgroundColor: `transparent`,
   },
   underlineLink: {
     ...fontIsLabel, fontWeight: `normal`, fontSize: 11,
     color: white,
   },
 });
