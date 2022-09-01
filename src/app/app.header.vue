<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="container-fluid">
    <ul>
      <li>
        <RouterLink :to="{ name: 'tournament.index' }" class="contrast">
          <strong>Smash Manager</strong>
        </RouterLink>
      </li>
    </ul>
    <ul>
      <li>
        <details role="list" dir="rtl">
          <summary aria-haspopup="listbox" role="link" class="secondary">BCHC</summary>
          <ul role="listbox">
            <li>
              <a href="#">Mon compte</a>
            </li>
            <li>
              <a href="#">Déconnexion</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
</template>