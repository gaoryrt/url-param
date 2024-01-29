declare module 'url-param' {
  export function u(key: string): string | undefined
  export function u(search?: any): { [key: string]: string | undefined }
  export function u(params: { [key: string]: string }): string
}
