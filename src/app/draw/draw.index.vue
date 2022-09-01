<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <hgroup>
    <h1>Tableaux</h1>
    <h2>70% de joueurs inscrits</h2>
  </hgroup>
  <table role="grid">
    <thead>
      <tr>
        <th>Catégorie</th>
        <th>Classements</th>
        <th>Salle</th>
        <th>Joueurs</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="draw in Array(4)">
        <td>
          <RouterLink :to="{ name: 'draw.show', params: { drawId: 1 }}">Simple Homme</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'draw.show', params: { drawId: 1 }}">R4 - R5</RouterLink>
        </td>
        <td>
          <RouterLink :to="{ name: 'hall.show', params: { hallId: 1 }}">Complexe Futura</RouterLink>
        </td>
        <td>24</td>
      </tr>
    </tbody>
  </table>
</template>