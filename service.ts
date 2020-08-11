import { v4 } from 'https://deno.land/std/uuid/mod.ts'
import { Farm, Pond } from './types.ts'

let app = await Deno.readFile('app.html');

let farms: Farm[] = [
    { name : 'farm1',
      ponds : [{name: 'pond1', size: 1}]
    }
]

const getApp = ({ response }: { response: any }) => {
    response.body = app;
}

const getFarms = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        farms: farms
    }
}

const saveFarms = async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()
    const value = await body.value
    farms = value
    console.log('farms updated:' + JSON.stringify(farms))
    response.status = 200
    response.body = {
        success: true,
        msg : 'Farms saved!'
    }
}

export { getApp, getFarms, saveFarms }