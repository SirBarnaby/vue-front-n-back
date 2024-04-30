import { v4 as uuidv4 } from 'uuid'
import { getCookie } from './Cookieficator'

export default class Fetcher {
  apiUrl: string
  /*
    Fetcher class. All fetches use master functionality, stored here.
    All fetches use different parameters, though.
    */
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  /*
    GET something from the backend.
    If GET doesnt go through, returns empty array.
    */
  public async fetchGet(): Promise<any> {
    const userCookie = getCookie('loginInfo')

    try {
      const response = await fetch(this.apiUrl, {
        method: 'GET',
        headers: {
          // dont add "'Accept': 'application/json'" here, for the sake of fuck
          Authorization: `Bearer ${userCookie.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        console.error('FETCH error: response NOT OK. Token expired?')
        return []
      }

      const responseAsJson = await response.json()

      console.log(responseAsJson) // print out the result of the response
      return responseAsJson
    } catch (error) {
      // If we can not fetch categories, then return empty array.
      console.error('FETCH error:', error)
      return []
    }
  }

  /*
    POST something. That is, add something somewhere.
    If the POST doesnt go through, display error message.
    */
  public async fetchPost(inputData: any) {
    const userCookie = getCookie('loginInfo')

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${userCookie.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      })

      if (!response.ok) {
        console.error('POST error: response NOT OK. Token expired?')
      } else {
        console.log('--DATA POSTED!--')
      }
    } catch (error) {
      // If we can not fetch categories, then return empty array.
      console.error('POST error:', error)
    }
  }

  /*
    DELETE something.
    If deletion does not go through, insert error to console.
    */
  public async fetchDelete(idToDelete: string) {
    const userCookie = getCookie('loginInfo')

    const deletionUrl = `${this.apiUrl}/${idToDelete}`
    try {
      const response = await fetch(deletionUrl, {
        method: 'DELETE',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${userCookie.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        console.error('Error deleting data: response NOT OK. Token expired?')
      } else {
        console.log(idToDelete + ' DELETED!')
      }
    } catch (error) {
      // If we can not fetch categories, then return empty array.
      console.error('Error deleting data:', error)
    }
  }

  // Generate an Unique Universal IDentificator version 4.
  // Each generation creates an unique uuidv4.
  public async getUuidv4() {
    return uuidv4()
  }
}
