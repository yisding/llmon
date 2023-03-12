import { BSON, EJSON } from 'bson'

import berries from "./berries.json"

const bytes = BSON.serialize(berries)

// output base64 of bytes
console.log(Buffer.from(bytes).toString('base64'))
