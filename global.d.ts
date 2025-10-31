// Fix missing scheduler/tracing types for React 18
declare module 'scheduler/tracing' {
  export interface Interaction {
    id: number
    name: string
    timestamp: number
  }
  export function unstable_clear(callback: () => void): void
  export function unstable_getCurrent(): Interaction[]
  export function unstable_trace(name: string, timestamp: number, callback: () => void): void
}
