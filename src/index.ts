export const getIndex = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'getIndex',
      event
    })
  }
}
