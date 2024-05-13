export interface Player {
  name: string
  id: number
}

export interface MindustryVersion {
  major: number
  build: number
  patch: number
  type: 'OFFICIAL' | 'ALPHA' | 'BLEEDING_EDGE' | 'CUSTOM'
}

export interface ChaoticServer {
  name: string
  host: string
  port: number
  mapName: string
  description: string
  wave: number
  playerCount: number
  playerLimit: number
  gameVersion: MindustryVersion
  gamemode: string
  active: boolean
  players: Player[]
}
