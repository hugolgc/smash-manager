import { REPOSITORY } from '../../environments'

const tournamentRepository = REPOSITORY('tournaments')

export const tournamentService = {
  async getAll() {
    try {
      const { data: tournaments } = await tournamentRepository.readByQuery({
        fields: ['id', 'name']
      })
      console.log(tournaments)
      return tournaments
    } catch (e) {
      console.error(e)
      return []
    }
  },
  async getOne(id) {
    try {
      const tournament = await tournamentRepository.readOne(id, {
        fields: ['id', 'name', 'date']
      })
      return tournament
    } catch (e) {
      console.error(e)
      return null
    }
  }
}