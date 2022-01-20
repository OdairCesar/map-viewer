import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {

  try {
    //requisição
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        restaurant_tagcategory_standalone: '10591',
        restaurant_tagcategory: '10591',
        currency: 'BRL',
        lang: 'pt_BR'
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '9493f20988mshfff12653a0633a4p1850b6jsnf597229cb0c9'
      }
    })

    return data
  } catch (error) {
    console.log(error)
  }
}