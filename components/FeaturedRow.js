import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import ResturantCard from './ResturantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({id, title, description}) => {

  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
     `*[_type == "featured" && _id == $id] {
      ...,
resturants[]->{
  ...,
  dishes[]->,
  type-> {
    name
  }
},
}[0]
`,
 {id}
 )
 .then(data => {
    setResturants(data?.resturants);
  });
  }, [])

  // console.log("Testtttttttttt", resturants)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4 ">
          <Text className="font-bold text-lg" >
              {title}
          </Text>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {resturants?.map((resturant) => (
          <ResturantCard
          key={resturant._id}
          id = {resturant._id}
          imgURl = {resturant.image}
          title = {resturant.name}
          rating = {resturant.rating}
          genre = {resturant.type?.name}
          address = {resturant.address}
          short_description = {resturant.short_description}
          dishes = {resturant.dishes}
          log = {20}
          lat = {0}
        />
        ))}
         
      </ScrollView>
    </View>
  )
}

export default FeaturedRow