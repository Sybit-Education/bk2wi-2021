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
  }
}

export default eventService
