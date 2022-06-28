import { createServer, Model } from 'miragejs'


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
  description: string;
  thumb_src: string;
  countries: ICountry[];
}

export function makeServer() {

  const server = createServer({
    models: {
      continents: Model.extend<Partial<IContinent>>({})
    },
    seeds(server) {
      server.db.loadData({
        continents: [
          {
            "id": "europa",
            "name": "Europa",
            "number_of_countries": 50,
            "number_of_languages": 60,
            "more_visited": 20,
            "description": "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
            "thumb_src": "https://i.pinimg.com/originals/46/17/80/4617800a4a8c66840f6780249b0fd643.jpg",
            "countries": [
              {
                "country": "Reino Unido",
                "country_code": "gb",
                "city": "Londres",
                "thumb_src": "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              },
              {
                "country": "França",
                "country_code": "fr",
                "city": "Paris",
                "thumb_src": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              },
              {
                "country": "Itália",
                "country_code": "it",
                "city": "Roma",
                "thumb_src": "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              },
              {
                "country": "Reino Unido",
                "country_code": "gb",
                "city": "Londeres",
                "thumb_src": "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              },
              {
                "country": "Paris",
                "country_code": "fr",
                "city": "Paris",
                "thumb_src": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              },
              {
                "country": "Itália",
                "country_code": "it",
                "city": "Roma",
                "thumb_src": "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              }
            ]
          },
          {
            "id": "asia",
            "name": "Ásia",
            "number_of_countries": 50,
            "number_of_languages": 60,
            "more_visited": 20,
            "description": "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso.",
            "thumb_src": "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "countries": [
              {
                "country": "Japão",
                "country_code": "jp",
                "city": "Fujiyoshida",
                "thumb_src": "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              }
            ]
          },
          {
            "id": "america-do-sul",
            "name": "América do sul",
            "number_of_countries": 50,
            "number_of_languages": 60,
            "more_visited": 20,
            "description": "A América do Sul guarda algumas das mais fantásticas belezas naturais do planeta. Para quem como nós adora embrenhar-se na natureza a América do Sul é um autêntico paraíso.",
            "thumb_src": "https://wallpaperaccess.com/full/1675736.jpg",
            "countries": [
              {
                "country": "Brasil",
                "country_code": "br",
                "city": "Rio de Janeiro",
                "thumb_src": "https://c4.wallpaperflare.com/wallpaper/43/779/691/sugar-loaf-mountain-botafogo-beach-rio-de-janeiro-sunrise-wallpaper-preview.jpg"
              }
            ]
          },
          {
            "id": "america-do-norte",
            "name": "América do norte",
            "number_of_countries": 50,
            "number_of_languages": 60,
            "more_visited": 20,
            "description": "A América do Norte é dona de lugares incríveis, cheios de histórias, belezas naturais e atrações para todos os gostos, estilos e bolsos.",
            "thumb_src": "https://c4.wallpaperflare.com/wallpaper/43/779/691/sugar-loaf-mountain-botafogo-beach-rio-de-janeiro-sunrise-wallpaper-preview.jpg",
            "countries": [
              {
                "country": "Canadá",
                "country_code": "ca",
                "city": "Ottawa",
                "thumb_src": "https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/07/america-do-norte-ottawa.jpg"
              }
            ]
          }
        ]
      })
    },
    routes() {

      this.namespace = 'api'

      this.get("/continents/:id", (schema, request) => {
        const id = request.params.id
        return schema.find('continents', id)
      })

      this.get('/continents', (schema, request) => {
        return schema.all('continents')
      })

      this.namespace = ''
      this.passthrough()
    }
  })

  return server

}