import { Fragment, useContext } from "react";
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function AboutScreen() {
  const { authState, signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Tentang saya</Text>
          <View style={styles.subtitle}>
            <Image
              style={styles.imageLogo}
              source={require("../assets/account-logo.png")}
            />
          </View>
        </View>

        <Fragment>
          <Text style={styles.name}>{authState.email}</Text>
          <Text style={styles.jobs}>React Native Developer</Text>
          <Text></Text>
        </Fragment>

        <View style={styles.portofolio}>
          <View style={styles.contentPortofolio}>
            <Text style={styles.contentTitle}>Portofolio</Text>
            <View style={styles.contentSkill}>
              <View style={styles.subContentSkill}>
                <Image 
                  style={styles.icon}
                  source={require("../assets/logo-gitlab.png")} 
                />
                <Text>Gitlab</Text>
              </View>
              <View style={styles.subContentSkill}>
                <Image 
                  style={styles.icon}
                  source={require("../assets/logo-github.png")} 
                />
                <Text>Github</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.socialMedia}>
          <View style={styles.contentMediaSocial}>
            <Text style={styles.contentTitle}>Hubungi saya</Text>
            <View style={styles.contentMediaSocialDown}>
              <View style={styles.subContentMediaSocialDown}>
                <View style={styles.subContentSkill}>
                  <Image 
                    style={styles.icon}
                    source={require("../assets/logo-facebook.png")} 
                  />
                  <Text>Facebook</Text>
                </View>
                <View style={styles.subContentSkill}>
                  <Image 
                    style={styles.icon}
                    source={require("../assets/logo-twitter.png")} 
                  />
                  <Text>Twitter</Text>
                </View>
                <View style={styles.subContentSkill}>
                  <Image 
                    style={styles.icon}
                    source={require("../assets/logo-instagram.png")} 
                  />
                  <Text>Instagram</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <Button 
          title="Sign Out"
          onPress={signOut}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 20
  },
  imageLogo: {
    height: 136,
    width: 136,
    resizeMode: "stretch",
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 20
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 20
  },
  subtitle: {
    backgroundColor: "#dddddd",
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: "center",
    marginBottom: 20
  },
  contentTitle: {
    fontSize: 20,
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: "cover"
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#404E7C"
  },
  jobs: {
    fontSize: 16,
    fontWeight: "400",
    color: "#404E7C"
  },
  portofolio: {
    backgroundColor: "#EFEFEF",
    height: 140,
    width: 300
  },
  contentPortofolio: {
    padding: 5
  },
  contentSkill: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 90,
    marginTop: 10
  },
  subContentSkill: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 5,
    rowGap: 2
  },
  socialMedia: {
    marginTop: 10,
    backgroundColor: "#EFEFEF",
    height: 200,
    width: 300
  },
  contentMediaSocial: {
    padding: 8
  },
  contentMediaSocialDown: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  subContentMediaSocialDown: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});