import { Directus } from '@directus/sdk'

const SERVER = 'https://om9g792p.directus.app'
const DIRECTUS = new Directus(SERVER)
const REPOSITORY = name => DIRECTUS.items(name)

export { SERVER, DIRECTUS, REPOSITORY }