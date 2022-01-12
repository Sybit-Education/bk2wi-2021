
const Airtable = require('airtable')

const airtableBase = new Airtable({
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY
}).base(process.env.VUE_APP_AIRTABLE_BASE)

export default airtableBase
