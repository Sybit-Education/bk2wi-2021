
import airtableBase from './airtable.service'
const TABLE_NAME = 'Event'
const ACTIVE_VIEW = 'published'

const eventService = {

  getSearchList (category) {
    console.log(category)

    const resultList = []
    airtableBase(TABLE_NAME)

      .select({
        view: ACTIVE_VIEW,
        filterByFormula: `SEARCH('${category}',{Eventname})`

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
  getList () {
    const resultList = []
    airtableBase(TABLE_NAME)
      .select({
        view: ACTIVE_VIEW
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
  async getEvent (id) {
    console.log('getEvent', id)
    return new Promise((resolve, reject) => {
      airtableBase(TABLE_NAME)
        .find(id, function (err, record) {
          if (err) {
            console.error(err)
            reject(err)
          }
          const result = {
            id: record.id,
            ...record.fields
          }
          console.log('result', result)
          resolve(result)
        })
    })
  },
  save (event) {
    console.log('save', event)
    return new Promise((resolve, reject) => {
      airtableBase(TABLE_NAME)
        .create(event, function (err, record) {
          if (err) {
            console.error(err)
            reject(err)
          }
          const result = {
            id: record.id,
            ...record.fields
          }
          console.log('result', result)
          resolve(result)
        })
    })
  }
}

export default eventService
