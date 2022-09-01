<script setup>
import { RouterLink } from 'vue-router'
import { useTournamentStore } from './tournament.store'

const tournamentStore = useTournamentStore()

tournamentStore.getAll()
</script>

<template>
  <main class="container">
    <section>
      <h1>Bad. Club Hersin Coupigny</h1>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Date</th>
              <th>Limite</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tournament in tournamentStore.tournaments">
              <td>
                <RouterLink :to="{ name: 'tournament.show', params: { tournamentId: tournament.id }}">{{ tournament.name }}</RouterLink>
              </td>
              <td>15 octobre 2022</td>
              <td>08 octobre 2022</td>
              <td>{{ Math.floor(Math.random() * 100) }} / 100</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </section>
  </main>
</template>