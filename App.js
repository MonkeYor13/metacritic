import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  //ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { getLatestGames } from "./lib/metacritic";
import GameCard from "./components/GameCard";
import { Logo } from "./components/Logo";

//NO HAY QUE UTILIZAR EL SCROLLVIEW DEBERIA USAR EL FLATLITS

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="green" />
      <Logo />
      {/* <ScrollView>
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </ScrollView> */}

      <FlatList
        data={games}
        keyExtractor={(game) => game.slug} //le decimos que del juego quiero que extraigas como key el slug, ya que no tenemos id
        renderItem={({ item }) => <GameCard game={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
});
