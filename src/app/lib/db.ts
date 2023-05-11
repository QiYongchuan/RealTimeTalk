import {Redis} from '@upstash/redis'

export const db = new Redis({
  url:'https://apn1-well-termite-35286.upstash.io',
  token:'AYnWASQgZjVmOTY2ZTEtOTFlYS00ZWI0LTgwYWItYjg2MzMzOTBiZjRmNmFlYTBiNDVlNDY1NDNlMmExNzYzMWZmYWIyZDAxMzE='
})