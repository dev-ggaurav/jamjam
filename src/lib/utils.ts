import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return new Date(date).toLocaleDateString(undefined, options)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
