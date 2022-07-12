import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, LocationMarkerIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';

const ResturantScreen = () => {
    const navigation = useNavigation();

    const {params :{id, imgURl, title, rating, genre, address, short_description, dishes, log, lat,}} = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
  return (
    <ScrollView>
      <View className='relative'>
          <Image
            source ={{
                uri: urlFor(imgURl).url(),
            }}
            className= 'w-full, h-56 bg-gray-300 p-4'
          /> 
          <TouchableOpacity onPress= {navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
              <ArrowLeftIcon size={20} />
          </TouchableOpacity>
      </View>
      <View className="bg-white">
          <View className='px-4 pt-4'>
              <Text className="text-3xl font-bold">{title}</Text>
              <View className ='flex-row space-x-2 my-1'>
                  <View className='flex-row items-center space-x-1'>
                      <StarIcon color='red' opacity={0.5} size={22} />
                      <Text className='text-xs text-gray-500'>
                          <Text className= 'text-red-500'>
                              {rating}
                          </Text>
                        </Text>
                  </View>
                  <View className='flex-row items-center space-x-1'>
                      <LocationMarkerIcon color='grey' opacity={0.5} size={22} />
                      <Text className='text-xs text-gray-500'>
                          <Text>
                              Nearby - {address}
                          </Text>
                        </Text>
                  </View>
                  
              </View>
              <Text className="text-grey-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-grey-300'>
              <QuestionMarkCircleIcon color='grey'/>
              <Text className="pl-2 flex-1 text-md font-bold"> Food Allergy?</Text>
              <ChevronRightIcon/>
          </TouchableOpacity>
      </View>
      <View>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
         {dishes.map((dish) => (
              <DishRow
              key={dish.id}
              id = {dish.id} 
              name = {dish.name}
              description = {dish.short_description}
              price = {dish.price}
              image = {dish.image}
            />
         ))}
      </View>
    </ScrollView>
  )
}

export default ResturantScreen