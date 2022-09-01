<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <hgroup>
    <h1>Joueurs</h1>
    <h2>96 joueurs inscrits</h2>
  </hgroup>
  <table role="grid">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Tableaux</th>
        <th>Classements</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in Array(4)">
        <td>
          <RouterLink :to="{ name: 'player.show', params: { playerId: 1 }}">Hugo Lagache</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'draw.show', params: { drawId: 1 }}">SH R5</RouterLink>
          <span> - </span>
          <RouterLink :to="{ name: 'draw.show', params: { drawId: 1 }}">DH D7</RouterLink>
        </td>
        <td>R6 - D7 - D8</td>
      </tr>
    </tbody>
  </table>
  <RouterView />
</template>