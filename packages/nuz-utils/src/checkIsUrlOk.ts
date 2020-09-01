import axios from 'axios'

async function checkIsUrlOk(url: string): Promise<boolean> {
  const response = await axios.get(url).catch((e) => e)

  return response.statusText === 'OK'
}

export default checkIsUrlOk
