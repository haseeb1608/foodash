import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {UserIcon, ChevronDownIcon, SearchIcon, AdjusmentsIcon, AdjustmentsIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'
import category from '../sanity/schemas/category'

const HomeScreen = () => {
    const navigation = useNavigation();

    const [FeaturedCategories, setFeaturedCategories] = useState([])
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect( () => {
        sanityClient.fetch(
            `*[_type == "featured"] {
                ...,
           resturants[]->{
             ...,
             dishes[]->
           }
          }`).then((data) => {
              setFeaturedCategories(data);
          })
    })
  return (
    <SafeAreaView className="bg-white pt-5">
            <View className= "flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{
                    uri: "https://links.papareact.com/wru",
                }}
                    className= "h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location <ChevronDownIcon size={20}/></Text>
                </View>
                <UserIcon size={35}/>
            </View>
            <View className= "flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <SearchIcon color="grey" size={20} />
                    <TextInput placeholder="Search Food" keyboardType="default" />
                </View>
                <AdjustmentsIcon/>
            </View>
            <ScrollView className='bg-gray-100 '>
                <Categories/>

                {FeaturedCategories?.map(category => (
                    <FeaturedRow
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    description={category.short_description}
                />
                ))}

            </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen