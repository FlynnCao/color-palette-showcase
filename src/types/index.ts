import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface iroiroConfig {}

export interface Iro {
  primary: string[]
  accent: string[]
  neutral: string[]
  semantic: string[]
  extended?: string[]
}

