<template>
  <div class="event-detail">
    <b-overlay :show="isLoading" rounded="sm" no-wrap />
    <div v-if="event">

  <b-img src="https://via.placeholder.com/150?text=Bild"
        fluid-grow alt="Fluid-grow image">
        </b-img>

      <h1>{{ event.Eventname }}</h1>

          <b-col>
            <div class="event-list-item__date">Datum: {{ event.Date }}</div>
            <div class="event-list-item__Time">Uhrzeit: {{ event.Time }}</div>
            <div class="event-list-item__location">Wo: {{ event.location }}</div>
            </b-col> 
        <br>
          <b-col>
            <div class="event-list-item_description">{{ event.Description }}</div>
          </b-col>
        <br>
          <b-col> 
            <div class="event-list-item_organizer">Veranstallter: {{ event.FirstName }} {{ event.Name }} </div>
          </b-col>
          <br>
        <b-row>
          <b-button variant="success" href="/" target="_self">Zurück zur Startseite</b-button>
        </b-row>
      </div>
  </div>
</template>


<script>
import eventService from '@/services/event.service'
export default {
  name: 'EventDetailView',
  data () {
    return {
      event: null,
      eventId: this.$route.params.id,
      isLoading: true
    }
  },
  mounted () {
    this.loadEvent(this.eventId)
  },
  methods: {
    async loadEvent (id) {
      this.event = await eventService.getEvent(id)
      this.isLoading = false
    }
  }
}
</script>
