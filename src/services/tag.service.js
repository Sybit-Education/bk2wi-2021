import airtableBase from './airtable.service'
const TABLE_NAME = 'Tag'

const tagService = {

  getTagList () {
    const resultTagList = []
    airtableBase(TABLE_NAME)
      .select()
      .eachPage(
        function page (partialRecords, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          partialRecords.forEach((partialRecord) => {
            resultTagList.push({
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
    console.log('resultTagList', resultTagList)
    return resultTagList
  }
}

export default tagService
