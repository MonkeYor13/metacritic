import { View, Text } from 'react-native'
import React from 'react'

export default function Score({ score, maxScore }) {

  //creamos nuestra funcion para que seleccione el color segun el puntuaje

  const getColors = () => {
    const porcentaje = (score / maxScore) * 100; //creamos la divicion y multiplicacion para los calculos

    if (porcentaje < 40) return 'bg-red-500';
    if (porcentaje < 65) return 'bg-yellow-500';
    return 'bg-green-500';
  }

  const MisPuntos = getColors();


  return (
    <View className={`${MisPuntos}w-8 h-8 rounded-full justify-center items-center`}>
      <Text className='text-lg font-bold text-white'>{score}</Text>
    </View>
  )
}