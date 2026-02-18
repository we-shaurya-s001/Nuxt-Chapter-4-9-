export default defineEventHandler(async (event) => {
    const { name } = getQuery(event)

    const body = await readBody(event)

    return {
        message: `Hello ${name}, you are ${body.age} years old`
    }
})