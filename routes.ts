import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getApp, getFarms, saveFarms } from './service.ts'

const router = new Router()

const app = await Deno.readFile('app.html');

router
    .get('/', getApp)
    .get('/api/v1/getFarms', getFarms)
    .post('/api/v1/saveFarms', saveFarms)


export default router