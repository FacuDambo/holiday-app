import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainView: {
        height: 250,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#00000080",
    },

    whiteText: {
        color: "#fff",
        fontSize: 40,
        letterSpacing: 2,
        marginBottom: 15,
    },

    dropdown2BtnStyle: {
        width: '55%',
        height: 50,
        backgroundColor: '#444',
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 1
    },
    dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#444',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {
        backgroundColor: '#444', 
        borderBottomColor: '#C5C5C5'
    },
    dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    scrollableContainer: {
        flexGrow: 1,
        paddingHorizontal: 10,
    },

    holidayContainer: {
        paddingTop: 30,
        paddingBottom: 35,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
    },

    holidayTitle: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },

    holidayDate: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "#262626",
        fontSize: 12,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        overflow: "hidden"
    },

    holidayDateText: {
        color: "#fff",
        backgroundColor: "#00000080",
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    holidayDescription: {
        marginRight: 5,
        fontSize: 13
    }
})