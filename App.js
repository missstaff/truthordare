import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';


import Emojis from "./components/Emojis";
import GameAvatars from "./components/GameAvatars";
import Icon from './components/Icon';

import { data } from "./data/data"


export default function App() {

  const { colors } = useTheme();
  const players = data.gameShowUser;
  const gameId = data.gameId;
  const currentUserId = "zoOb78tuygh"

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.titleContainer} >
            <Text style={styles.truth}
            >truth
            </Text>
            <Text style={styles.or}
            >or
            </Text>
            <Text style={styles.dare}
            >dare
            </Text>
            <View style={styles.close}>
              <Icon name={"close"} onPress={() => console.log("PRESS TO CLOSE")} />
            </View>
          </View>
          <View style={styles.viewersContainer}>
            <Text style={styles.viewers}
            >216 viewers</Text>
          </View>
        </View>
        <GameAvatars players={players} />
        <Emojis gameId={gameId} userId={currentUserId}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  close: { 
    left: 80,
    postition: "absolute",  
    top: 30, 
  },
  container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: 'center',
  },
  dare: {
    color: "red",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.10,
    marginTop: 50,
    marginBottom: 5,
  },
  or: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.10,
    marginTop: 50,
    marginBottom: 5,
    paddingRight: 2,
    paddingLeft: 2
  },
  safe: {
    backgroundColor: "#000",
    flexDirection: 'column',
    height: "100%",
    marginRight: 2,
    marginLeft: 2,
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'center',
    position: "relative"
  },
  truth: {
    color: "goldenrod",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.10,
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 50
  },
  viewers: {
    color: '#666',
    fontSize: 12,
    letterSpacing: 0.10,
    marginBottom: 20,
  },
  viewersContainer: { 
    alignSelf: "center" 
  },
});
