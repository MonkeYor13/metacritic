import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Score from './Score';

export default function GameCard({ game }) {
  return (
    <View className='mb-10 mt-5 bg-slate-800 p-4 rounded-xl flex-row gap-4'>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore={100} />
        <Text
          className='mt-2'
          style={styles.description}
        >{game.description.slice(0, 100)}...
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    //marginBottom: 42,
    //marginTop: 20
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginTop: 10,
  },
});