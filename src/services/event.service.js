import airtableBase from './airtable.service'

const TABLE_NAME = 'Event'
const ACTIVE_VIEW = 'published'

const eventService = {
  getList () {
    const resultList = []
    airtableBase(TABLE_NAME)
      .select({
        view: ACTIVE_VIEW,
        cellFormat: 'string', // required to format times readable
        userLocale: 'de-DE',
        timeZone: 'Europe/Berlin'
      })
      .eachPage(
        function page (partialRecords, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          partialRecords.forEach((partialRecord) => {
            resultList.push({
              id: partialRecord.id,
              ...partialRecord.fields
            })
          })
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage()
        },
        function done (err) {
          if (err) {
            console.error(err)
          }
        }
      )
    console.log('resultList', resultList)
    return resultList
  },
  getEvent (id) {
    console.log('getEvent', id)
    airtableBase(TABLE_NAME).find(id, function (err, record) {
      if (err) {
        console.error(err)
        return null
      } else {
        const result = {
          id: record.id,
          ...record.fields
        }
        console.log('result', result)
        return result
      }
    })
  }
}

export default eventService
