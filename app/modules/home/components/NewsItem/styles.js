import { StyleSheet } from 'react-native';
import { theme } from "../../index"
export const {padding, color, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderColor: color.lightGrey,
        borderWidth: 1,
        backgroundColor: color.white,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: color.lightGrey,
        shadowRadius: 5,
        padding: 4,
        marginVertical: 5,
        marginHorizontal: 10
    },

    wrapper:{
        padding: padding,
        flexDirection: "row",
    },

    img:{
        height: 75,
        width: 75,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: color.light_grey,
        marginLeft: padding * 1.5
    },

    info:{
        flex:1

    },

    title:{
        fontSize: fontSize.regular,
        fontFamily: fontFamily.regular,
        color: color.black,
        
    },

    bottom:{
        flexDirection: "row",
        flex:1,
        marginTop: padding * 2,
        alignSelf: 'flex-start'
    },

    source:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.green
    },

    date:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.grey,
        marginLeft: padding
    },
});


export default styles;