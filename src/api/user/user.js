import Api from 'fakeapi'

async function connectUser({ name }) {
  try {
    const res = await Api.ApiCall({ name })
    return res
  } catch (e) {
    return { error: e }
  }
}

export default {
  connectUser,
}
