import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, StatusBar, ImageBackground, TouchableHighlight, Linking } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import Years from '../scripts/years'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import styles from '../scripts/styles';
import AnimatedLoader from './AnimatedLoader';

const Spain = ({ navigation }) => {
    const [year, setYear] = useState(2022)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://calendarific.com/api/v2/holidays?&api_key=524c0553be46ac13d593e254307d0db8557ec91b&country=ES&year=${year}`)
        .then(res => {
        setData(res.data.response.holidays)
        })
        .catch(err => console.log(err))
    }, [year])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [loading])

    const years = Years()
    const image = {uri: "https://images.unsplash.com/photo-1519749590405-ea0c5456862c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"}

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
            <ImageBackground  source={image} resizeMode="cover" >
                <View style={styles.mainView}>
                    <Text style={styles.whiteText}>SPAIN</Text>
                    <TouchableHighlight style={styles.changeButton} onPress={() => navigation.navigate('France')} activeOpacity={0.6} underlayColor="#DDDDDD">
                        <Text>Go to France</Text>
                    </TouchableHighlight>
                    <SelectDropdown data={years} 
                        onSelect={selectedItem => {setYear(selectedItem), setLoading(true)}}
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
                {loading 
                    ?
                    <AnimatedLoader />
                    :
                    data.map((holiday, index) => RenderHoliday(holiday, index))
                }
            </ScrollView>
        </View>
    )
}

const RenderHoliday = (holiday, index) => {
    /* Date formating */
    let dateData = holiday.date.datetime
    let day = dateData.day < 10 ? "0" + dateData.day : dateData.day 
    let month = dateData.month < 10 ? "0" + dateData.month : dateData.month 
    let date = day + '-' + month + '-' + dateData.year

    let image = { uri: "https://stuffedeyes.files.wordpress.com/2018/06/spain-2906824_960_720.png?w=748" };

     /* Format name to make it searchable */
    let name = holiday.name
    let searchableName = name.replace(/ /g, '_')

    return (
        <TouchableHighlight key={index} onPress={() => Linking.openURL(`https://en.wikipedia.org/wiki/${searchableName}`)} activeOpacity={0.9} underlayColor="#DDDDDD">
            <View key={index} style={styles.holidayContainer}>
                <Text style={styles.holidayTitle}>{holiday.name}</Text>
                <ImageBackground source={image} style={styles.holidayDate} resizeMode="cover">
                    <Text style={styles.holidayDateText}>{date}</Text>
                </ImageBackground>
                <Text style={styles.holidayDescription}>{holiday.description}</Text>
                <Text style={styles.infoBtn}>Touch for more info!</Text>
            </View>
        </TouchableHighlight>
    )
}

export default Spain