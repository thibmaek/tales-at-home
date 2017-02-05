 import { StyleSheet } from 'react-native';
 import { globalStyle, fontIsLabel, white, accentBlue } from 'src/assets/styles/vars';

 export default StyleSheet.create({
   container: {
     flex: 1, flexDirection: `column`,
   },
   loginContainer: {
     flex: 1,
     flexDirection: `column`,
     alignItems: `center`,
   },
   loginTitleContainer: {
     flex: 1, alignItems: `center`,
   },
   title: {
     marginBottom: 75, marginTop: 40,
     ...globalStyle, fontSize: 16, letterSpacing: 2, textAlign: `center`,
     color: white, backgroundColor: `transparent`,
   },
   loginFormContainer: {
     flexDirection: `column`,
     alignItems: `center`,
   },
   inputContainer: {
     width: 280,
     marginBottom: 35,
     borderBottomColor: white, borderBottomWidth: 1, borderStyle: `solid`,
   },
   input: {
     height: 30,
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
     flex: 1, justifyContent: `flex-end`,
     backgroundColor: `transparent`,
     borderBottomColor: white, borderBottomWidth: 0.5, borderStyle: `solid`,
   },
   textLink: {
     marginTop: 20,
     ...globalStyle,
     ...fontIsLabel, fontWeight: `normal`, fontSize: 14,
     backgroundColor: `transparent`,
     color: white,
   },
   underlineLink: {
     marginBottom: 50,
     ...globalStyle, fontSize: 11, textDecorationLine: `underline`,
     backgroundColor: `transparent`, color: white,
   },
 });
