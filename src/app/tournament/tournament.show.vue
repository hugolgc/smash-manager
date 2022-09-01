<script setup>
import { useRoute } from 'vue-router'
import { useTournamentStore } from './tournament.store'

const route = useRoute()
const tournamentStore = useTournamentStore()

tournamentStore.getOne(parseInt(route.params.tournamentId))
</script>

<template>
  <hgroup v-if="tournamentStore.tournamentSelected">
    <h1>{{ tournamentStore.tournamentSelected.name }}</h1>
    <h2>{{
      tournamentStore.tournamentSelected.date
      ? tournamentStore.tournamentSelected.date
      : '-- -- ----'
    }}</h2>
  </hgroup>
</template>