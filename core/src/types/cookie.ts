export type CookieMap = Map<string, Map<string, string>>

export type CookieRawObject = {
  [K: string]: string
}

export interface FetchCookieOptions {
  type?: 'json' | 'form'
  body?: string
  isPost?: boolean
}

export interface handleCookieOptions {
  preCookieURLArray?: Array<string>
  preAuthURL?: string
  authURL?: string
}
