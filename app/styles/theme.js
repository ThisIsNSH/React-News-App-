import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
    black: 'rgba(0,0,0,.84)',
    light_black: '#414141',
    main: '#7A94CE',
    white: '#ffffff',
    light_grey: '#eaeaea',
    grey: '#ccc',
    red: 'red',
    underlayColor: '#ddd',
    lightGrey: '#eeede7',
    green: '#af5166',
    darkBlue: '#5997ac'
}

const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    extralarge: normalize(28)
}

const helvetica = {
    bold: "HelveticaNeue-Bold",
    medium: "HelveticaNeue-Medium",
    regular: "Helvetica Neue",
    light: "HelveticaNeue-Light"
}

const fontFamily = helvetica;

const imageOptions = {
    allowsEditing: false,
    aspect: [4, 3],
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "#fff" : "#fff";
const selectedTabColor = (Platform.OS === "ios") ? color.main : color.main;

const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }
const navTitleStyle = { fontSize: fontSize.regular , fontFamily: fontFamily.bold, color: color.white, letterSpacing: 4}
const navigationBarStyle = { backgroundColor: color.black, borderBottomWidth:0 }

const backButtonStyle = {fontSize: fontSize.regular , fontFamily: fontFamily.bold, color: color.white, letterSpacing: 4}

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    navigationBarStyle,
    imageOptions,
    normalize,
    backButtonStyle
}