import type { JournalDay, Trade } from '@/types/trade'

export const MOCK_RECENT_TRADES: Trade[] = [
  {
    id: 1,
    symbol: 'BTC/USDT',
    side: 'Long',
    date: 'Oct 06, 2023',
    pnl: 187.45,
    mfe: 4.2,
    setup: 'Breakout',
    colorClass: 'text-orange-500',
  },
  {
    id: 2,
    symbol: 'SOL/USDT',
    side: 'Short',
    date: 'Oct 05, 2023',
    pnl: 68.73,
    mfe: 2.1,
    setup: 'Pullback',
    colorClass: 'text-purple-500',
  },
  {
    id: 3,
    symbol: 'ETH/USDT',
    side: 'Long',
    date: 'Oct 04, 2023',
    pnl: -27.92,
    mfe: 0.5,
    setup: 'Reversal',
    colorClass: 'text-blue-500',
  },
]

export const MOCK_ALL_TRADES: Trade[] = [
  {
    id: 101,
    symbol: 'BTC/USDT',
    side: 'Long',
    date: '2023-10-06 14:30',
    entryPrice: '27,450',
    exitPrice: '27,800',
    pnl: 187.45,
    mfe: 4.2,
    mae: -0.5,
    tags: ['Breakout', 'A-Setup', 'Followed Rules'],
    colorClass: 'text-orange-500',
  },
  {
    id: 102,
    symbol: 'SOL/USDT',
    side: 'Short',
    date: '2023-10-05 09:15',
    entryPrice: '23.40',
    exitPrice: '22.80',
    pnl: 68.73,
    mfe: 2.1,
    mae: -0.2,
    tags: ['Pullback', 'High Volatility'],
    colorClass: 'text-purple-500',
  },
  {
    id: 103,
    symbol: 'ETH/USDT',
    side: 'Long',
    date: '2023-10-04 16:45',
    entryPrice: '1,640',
    exitPrice: '1,620',
    pnl: -27.92,
    mfe: 0.5,
    mae: -2.0,
    tags: ['FOMO', 'Early Exit', 'Mistake'],
    colorClass: 'text-blue-500',
  },
]

export const MOCK_JOURNAL_DAYS: JournalDay[] = [
  {
    date: '2023-10-06',
    dateFormatted: 'Friday, Oct 06',
    mood: 'good',
    tradeCount: 3,
    pnl: 228.26,
    excerpt:
      'Followed my plan perfectly today. Waited for the BTC breakout confirmation.',
  },
  {
    date: '2023-10-05',
    dateFormatted: 'Thursday, Oct 05',
    mood: 'neutral',
    tradeCount: 1,
    pnl: 68.73,
    excerpt: 'Quiet day, took one solid setup on SOL but missed another entry.',
  },
  {
    date: '2023-10-04',
    dateFormatted: 'Wednesday, Oct 04',
    mood: 'bad',
    tradeCount: 4,
    pnl: -145.5,
    excerpt:
      'Terrible psychology. Revenge traded ETH after a small initial loss.',
  },
]

export const STATS = {
  winRate: '68.4%',
  profitFactor: '2.14',
  broker: 'Binance',
  totalPnl: 24832.5,
  totalPnlChange: '+12.4%',
  totalTrades: 1248,
  dataQuality: '98% Clean',
  lastImport: 'Today, 09:41 AM',
  importStatus: 'Synced (Binance)',
} as const
