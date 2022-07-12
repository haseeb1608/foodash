import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const ResturantCard = ({id, imgURl, title, rating, genre, address, short_description, dishes, log, lat,}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Resturant', {
          id, imgURl, title, rating, genre, address, short_description, dishes, log, lat,
        })
      }} 
      className="bg-white mr-3 shadow">
      <Image
        source={{uri : urlFor(imgURl).url()}}
        className= "h-64 w-64 rounded-sm" 
      />
      <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">
              {title}
          </Text>
          <View className="flex-row items-center space-x-1">
              <StarIcon color="red" opacity={0.5} size={22} />
              <Text className = "text-xs text-gray-500">
                  <Text className="text-red-500">
                      {rating}
                  </Text> | {genre}
              </Text>
          </View>
          <View className= 'flex-row items-center space-x-1'>
              <LocationMarkerIcon color='grey' opacity={0.4} size = {22} />
              <Text className='text-xs text-grey-500'> Nearby . {address}</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard