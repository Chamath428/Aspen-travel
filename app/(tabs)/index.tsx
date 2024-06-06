import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  SafeAreaView,
} from "react-native";
import { homeimage } from "../../constants/images";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={homeimage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.middleView}>
          <Text style={styles.headerText}>Aspen</Text>

    <View>
      <Text style={styles.bottomText1}>Plan your</Text>
      <Text style={styles.bottomText2}>Luxurious</Text>
      <Text style={styles.bottomText2}>Vacation</Text>
    </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  middleView: {
    flex: 1,
    justifyContent:'space-between',
    borderWidth: 4,
    borderColor: "red",
    paddingTop:100,
    paddingBottom:50,
    width:"100%",
    paddingHorizontal:30
  },

  headerText: {
    color: "#ffffff",
    fontSize: 116,
    fontFamily:"Hiatus",
    lineHeight:126,
    letterSpacing:8,
    textAlign:'center'
  },
  bottomText1:{
    color:'#ffffff',
    fontFamily:'Montserrat',
    fontSize:24,
    lineHeight:27,
    fontWeight:'400'
  },
  bottomText2:{
    color:'#ffffff',
    fontFamily:'Montserrat',
    fontSize:40,
    fontWeight:'700'
  }
});
