import airtableBase from './airtable.service'

const TABLE_NAME = 'Event'
const ACTIVE_VIEW = 'published'

const eventService = {
  async getList () {
    const response = await airtableBase.get(`${TABLE_NAME}?view=${ACTIVE_VIEW}`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })
    return resultList
  },
  async getEvent(id) {
    const response = await airtableBase.get(`${TABLE_NAME}/${id}`)
    const result = response.data.fields
    return result
  }
}

export default eventService
