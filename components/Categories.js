import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import CategorieCard from './CategorieCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState();


  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "category"] {
        ...,
 
}`
    ).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView 
        horizontal 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategorieCard 
        key={category._id}
        imgURl={urlFor(category.image).width(200).url()}
        title={category.title}
        />
      ))}
    </ScrollView>
  )
}

export default Categories