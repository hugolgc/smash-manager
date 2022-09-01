import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tournament.index',
      component: () => import('./tournament/tournament.index.vue')
    },
    {
      path: '/tournaments/:tournamentId',
      component: () => import('./tournament/tournament.layout.vue'),
      children: [
        {
          path: '',
          name: 'tournament.show',
          component: () => import('./tournament/tournament.show.vue')
        },
        {
          path: 'halls',
          name: 'hall.index',
          component: () => import('./hall/hall.index.vue'),
          children: [
            {
              path: ':hallId',
              name: 'hall.show',
              component: () => import('./hall/hall.show.vue')
            }
          ]
        },
        {
          path: 'draws',
          name: 'draw.index',
          component: () => import('./draw/draw.index.vue')
        },
        {
          path: 'draws/:drawId',
          name: 'draw.show',
          component: () => import('./draw/draw.show.vue')
        },
        {
          path: 'players',
          name: 'player.index',
          component: () => import('./player/player.index.vue'),
          children: [
            {
              path: ':playerId',
              name: 'player.show',
              component: () => import('./player/player.show.vue')
            }
          ]
        }
      ]
    }
  ]
})