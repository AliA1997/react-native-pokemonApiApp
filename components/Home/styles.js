//improt StyleSHeet to provide a css abstraction
///import Platform to provide styling for specific platforms android and ios.
import { StyleSheet, Platform } from 'react-native';

//Define your styles using a StyleSheet.create method.
const styles = StyleSheet.create({
    homeDiv: {
        //Flex: 1 gets all the space 
        flex: 1,
        //Since by default flexDiraction is column will center container children vertically within container.
        justifyContent: 'center',
        //Horizantally centers component is will center children horizontally within container.
        alignItems: 'center',
        //Have a backgroundColor of #000
        backgroundColor: '#000'
    },
    homePageImage: {
        //Have the image be 75% to render entire image width.
        width: '75%',
        //Have the image be 50% to render entire image height.
        height: '50%',
    },
    header: {
        //Define the size of the font.
        fontSize: 30,
        //Have the font color be orange.
        color: 'orange',
        //Have the text align in the center.
        textAlign: 'center',
        //Use the Platform.select for specifying fontFamily based on Platform.
        ...Platform.select({
            ios: {
                fontFamily: 'Heiti SC'
            },
            android: {
                fontFamily: 'monospace'
            }
        })
    }
})
//Export your styles
export default styles;