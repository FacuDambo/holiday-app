import React from 'react'
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import Years from '../scripts/years'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RenderHoliday = (holiday, index) => {
    let dateData = holiday.date.datetime
    let day = dateData.day < 10 ? "0" + dateData.day : dateData.day 
    let month = dateData.month < 10 ? "0" + dateData.month : dateData.month 
    let date = day + '-' + month + '-' + dateData.year

    let image = { uri: "https://preview.redd.it/3ougeqxn4b981.png?width=900&format=png&auto=webp&s=64adfd255be4eb20b28facac7e95861be03535d1" };

    return (
        <View key={index} style={styles.holidayContainer}>
            <Text style={styles.holidayTitle}>{holiday.name}</Text>
            <ImageBackground source={image} style={styles.holidayDate} resizeMode="cover">
                <Text style={styles.holidayDateText}>{date}</Text>
            </ImageBackground>
            <Text style={styles.holidayDescription}>{holiday.description}</Text>
        </View>
    )
}

const France = ({data, setYear}) => {

    const year = Years()
    const image = {uri: "https://images.unsplash.com/photo-1549416878-ceda3534842b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}

    return (
        <View style={{flex: 1}}>
            <ImageBackground  source={image} resizeMode="cover">
                <View style={styles.mainView}>
                    <Text style={styles.whiteText}>FRANCE</Text>
                    <SelectDropdown data={year} 
                        onSelect={selectedItem => {setYear(selectedItem)}} 
                        defaultButtonText={'Select year'} 
                        buttonStyle={styles.dropdown2BtnStyle}
                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                        renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={18} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown2DropdownStyle}
                        rowStyle={styles.dropdown2RowStyle}
                        rowTextStyle={styles.dropdown2RowTxtStyle}></SelectDropdown>
                </View>
            </ImageBackground>
            <ScrollView style={styles.scrollableContainer}>
                {data.map((holiday, index) => RenderHoliday(holiday, index))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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

    scrollableContainer: {
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
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

    holidayContainer: {
        paddingTop: 30,
        paddingBottom: 35,
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    holidayTitle: {
        paddingRight: 5,
        fontWeight: "bold",
        fontSize: 20
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
});

export default France