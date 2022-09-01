<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'hall.index' }">Salles</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'draw.index' }">Tableaux</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'player.index' }">Joueurs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tournament.show' }">Matchs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tournament.show' }">Préférences</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>