import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    mainView: {
        height: 300,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#00000080",
    },

    loaderView: {
        height: 300,
        justifyContent:"center",
        alignItems: "center",
    },

    loaderTitle: {
        fontSize: 60,
    },

    changeButton: {
        marginBottom: 20, 
        borderRadius: 30,
        backgroundColor: "#fff",
        padding: 7.5,
        paddingHorizontal: 25,
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
        paddingBottom: 25,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
        marginRight: 10,
        fontSize: 13,
        textAlign: "justify",
    },

    infoBtn: {
        fontSize: 8,
        color: '#b8b8b8',
        marginTop: 25,
        letterSpacing: 2,
    }
})