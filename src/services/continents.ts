import axios from 'axios';

interface ICountry {
  country: string;
  country_code: string;
  city: string;
  thumb_src: string;
}

interface IContinent {
  id: string;
  name: string;
  number_of_countries: number;
  number_of_languages: number;
  more_visited: number;
  thumb_src: string;
  countries: ICountry[];
}


const api = axios.create({
  baseURL: "http://localhost:3333/continents"
});


export const listAll = async () => {

  const response = await api.get<IContinent[]>('/');

  return response.data;

}
export const findByName = async (name: string) => {

  const response = await api.get<IContinent>(`/${name}`);

  return response.data;

}