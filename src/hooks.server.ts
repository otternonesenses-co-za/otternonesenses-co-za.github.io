// import { createClient } from '@supabase/supabase-js'
// import { env } from '$env/dynamic/private'
// import type {Handle} from '@sveltejs/kit'

// export const supabase = createClient(
//     env.VITE_SUPABASE_URL,
//     env.VITE_SUPABASE_ANON_KEY
// )

// export const handle: Handle =  async ({ event, resolve }) => {
//     event.locals.supabase = supabase
//     console.log("running web hook")
//     return await resolve(event)
// }