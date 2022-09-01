<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <hgroup>
    <h1>Salles</h1>
    <h2>4 salles - 28 terrains</h2>
  </hgroup>
  <table role="grid">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Adresse</th>
        <th>Terrains</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hall in Array(4)">
        <td>
          <RouterLink :to="{ name: 'hall.show', params: { hallId: 1 }}">Complexe Futura</RouterLink>
        </td>
        <td>Rue Romain Roland, 62530 Hersin-Coupigny</td>
        <td>7</td>
      </tr>
    </tbody>
  </table>
  <RouterView />
</template>