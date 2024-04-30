export default class Authenticator {
  /*
    Authenticator.
    Login, logout, register a new account.
    */
  public static async attemptLogin(inputData: { email: string; password: string }): Promise<any> {
    const apiUrl: string = 'https://taltech.akaver.com/api/v1/Account/Login'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      })

      if (response.status === 404) {
        return {
          messages: 'Invalid credentials!'
        }
      }

      const responseAsJson = await response.json()
      return responseAsJson
    } catch (error) {
      console.error('LOGIN error:', error)
      return {
        messages: 'Unable to log on! Something is wrong in the BACKEND.'
      }
    }
  }

  /*
    Attempt to register an user.
    If registration is successful, immediately login.
    If not, return error messages.
    */
  public static async attemptRegister(inputData: {
    email: string
    password: string
    firstName: string
    lastName: string
  }): Promise<any> {
    const apiUrl: string = 'https://taltech.akaver.com/api/v1/Account/Register'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      })

      if (response.status === 400) {
        // 400 is BAD REQUEST.
        console.log('REGISTER: Status 400')
      }

      const responseAsJson = await response.json()
      console.log(responseAsJson)
      return responseAsJson
    } catch (error) {
      console.error('REGISTER error:', error)
      return {
        messages: 'Unable to log on! Something is wrong in the BACKEND.'
      }
    }
  }
}
