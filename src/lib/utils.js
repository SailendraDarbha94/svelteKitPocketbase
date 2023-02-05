const { randomBytes } = await import('node:crypto')

export const serializeNonPOJOs = (objectToClone) =>  {
        const stringified = JSON.stringify(objectToClone);
        const parsed = JSON.parse(stringified);
        return parsed;
    }

export const generateUsername = (name) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0,5)}${id}`
}