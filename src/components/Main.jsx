import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import axios from 'axios'
import France from './France'

const Main = () => {
  const [year, setYear] = useState(2022)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://calendarific.com/api/v2/holidays?&api_key=524c0553be46ac13d593e254307d0db8557ec91b&country=FR&year=${year}`)
    .then(res => {
      setData(res.data.response.holidays)
    })
  }, [year])

  return (
    <View style={styles.container}>
      <France data={data} setYear={setYear} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main