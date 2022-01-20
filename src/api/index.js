import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '-23.6017',
    tr_latitude: '-23.51',
    bl_longitude: '-46.7482',
    tr_longitude: '-46.5559',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    currency: 'BRL',
    lang: 'pt_BR'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '9493f20988mshfff12653a0633a4p1850b6jsnf597229cb0c9'
  }
};

export const getPlacesData = async () => {
  try {
    //requisição
    const { data: { data } } = await axios.get(URL, options)

    return data
  } catch (error){
    console.log(error)
  }
}