/*
Add a cookie to the clients browser.
*/
export default async function setCookie(param1: string, param2: any) {
  document.cookie = param1 + '=' + JSON.stringify(param2)
}

/*
Get a cookie from the clients browser.
If cookie name doesn't exist, return empty string.
*/
export function getCookie(cookieName: string): object {
  // Not mine! Taken from: chatgpt
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim())
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=')
    if (name === cookieName) {
      return JSON.parse(value)
    }
  }
  return new Object() // Cookie not found
}

/*
Delete a cookie from the users browser.
Deletion method: set the date of expiry to the beginning of time.
*/
export async function deleteCookie(cookieName: string): Promise<void> {
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}
