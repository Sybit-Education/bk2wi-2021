<template>
  <div class="event-detail">
    <h1>{{ event.Eventname }}</h1>
    <b-row>
      <b-col>Ort: {{ event.location }}</b-col>
      <b-col>Datum: {{ event.Date }}</b-col>
    </b-row>
  </div>
</template>

<script>
import eventService from '@/services/event.service'
export default {
  name: 'EventDetail',
  data () {
    return {
      event: {},
      eventId: this.$route.params.id
    }
  },
  mounted () {
    this.loadEvent()
  },
  methods: {
    async loadEvent () {
      this.event = await eventService.getEvent(this.eventId)
    }
  }
}
</script>
