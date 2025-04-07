import axios from "axios"

const BASE_URL='https://places.googleapis.com/v1/places:searchText'

const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.photos,places.id,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.primaryTypeDisplayName'
    }
}

export const GetPlaceDetails=(data)=>axios.post(BASE_URL, {
    textQuery: data.textQuery,
    languageCode: "en"
}, config)


export const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
