import { defineStore } from 'pinia'
import { tournamentService } from './tournament.service'

export const useTournamentStore = defineStore({
  id: 'tournament',
  state: () => ({
    tournaments: [],
    tournamentSelected: null
  }),
  actions: {
    async getAll() {
      this.tournaments = await tournamentService.getAll()
    },
    async getOne(id) {
      this.tournamentSelected = this.tournaments.find(tournament => tournament.id === id)
      this.tournamentSelected = await tournamentService.getOne(id)
    }
  }
})