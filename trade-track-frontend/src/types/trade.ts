export type TradeSide = 'Long' | 'Short'

export interface Trade {
  id: number
  symbol: string
  side: TradeSide
  date: string
  entryPrice?: string
  exitPrice?: string
  pnl: number
  mfe: number
  mae?: number
  setup?: string
  tags?: string[]
  colorClass: string
}

export type JournalMood = 'good' | 'bad' | 'neutral'

export interface JournalDay {
  date: string
  dateFormatted: string
  mood: JournalMood
  tradeCount: number
  pnl: number
  excerpt: string
}

export type TimeRange = '1D' | '1W' | '1M' | '1Y' | 'All'
