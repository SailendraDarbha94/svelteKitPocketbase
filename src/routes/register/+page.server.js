import { redirect, error } from "@sveltejs/kit"
import { generateUsername } from "../../lib/utils"


export const actions = {
    register: async ({  locals, request }) => {
        const body = Object.fromEntries(await request.formData())

        let username = generateUsername(body.name.split(' ').join('')).toLowerCase()

        try {
            console.log(body)
            console.log(username)
            
            await locals.pb.collection('users').create({ username, ...body})
            await locals.pb.collection('users').requestVerification(body.email)
        } catch (e) {
            console.log(e)
            throw error(500, 'Something Went Wrong again')
        }

        throw redirect(303, '/login')
    }
}