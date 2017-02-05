 import { StyleSheet } from 'react-native';
 import { globalStyle, white, accentBlue } from 'src/assets/styles/vars';

 export default StyleSheet.create({
   container: {
     flexDirection: `column`,
     flex: 1,
   },
   loginContainer: {
     flexDirection: `column`,
     flex: 1,
     alignItems: `center`,
   },
   loginTopContainer: {
     flexDirection: `column`,
     flex: 1,
     alignItems: `center`,
     justifyContent: `center`,
   },
   title: {
     marginBottom: 75,
     ...globalStyle, fontSize: 50, fontWeight: `bold`,
     color: white, backgroundColor: `transparent`,
   },
   inputContainer: {
     width: 280,
     marginBottom: 20,
     borderBottomColor: white, borderBottomWidth: 1, borderStyle: `solid`,
   },
   input: {
     height: 30,
     marginTop: 30,
     ...globalStyle,
     color: white,
   },
   button: {
     width: 280,
     backgroundColor: white,
     borderWidth: 0, borderRadius: 50,
   },
   buttonText: {
     ...globalStyle,
     fontWeight: `bold`,
     color: accentBlue,
   },
   anonLogin: {
     marginBottom: 50,
     backgroundColor: `transparent`,
     borderBottomColor: white, borderBottomWidth: 0.5, borderStyle: `solid`,
   },
   underlineLink: {
     ...globalStyle, fontSize: 11,
     color: white,
   },
 });
