import { Fragment, useState, useEffect } from "react"
import { Image, Text, View, ActivityIndicator, FlatList } from "react-native"

export default function HomeScreen() {
  const baseUrl = "https://randomuser.me/api/?results=5&nat=us"
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getContacts = async () => {
    try {
      const res = await fetch(baseUrl);
      const json = await res.json();
      setData(json.results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "white" }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Fragment>
              <View style={{
                flex: 1,
                flexDirection: "column",
                borderWidth: 0.5,
                marginBottom: 5,
                paddingLeft: 10,
                paddingBottom: 10,
                paddingTop: 10
              }}>
                <Image 
                  style={{ 
                    height: 40,
                    width: 40,
                    resizeMode: "cover" 
                  }}
                  source={{ uri: item.picture.medium }}  
                />
                <Text>{item.name.first} {item.name.last}</Text>
                <Text>{item.phone}</Text>
              </View>
            </Fragment>
          )}
        />
      )}
    </View>
  )
}
