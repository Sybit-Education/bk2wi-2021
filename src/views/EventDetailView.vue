<template>
  <div class="event-detail">
    <b-overlay
      :show="isLoading"
      rounded="sm"
      no-wrap
    />
    <div v-if="event">
      <br>
      <b-img
        src="/img/TestBild1.jpg"
        fluid-grow
        alt="Fluid-grow image"
      />
      <h4>{{ event.Eventname }}</h4>
      <br>
      <p>
        Datum: {{ eventDate }}
        <br>
        Uhrzeit: {{ eventTime }}
        <br>
        Wo: {{ event.location }}
      </p>
      <br>
      <p>{{ event.Description }}</p>
      <br>
      <p>Veranstalter: {{ event.FirstName }} {{ event.Name }}</p>
      <br>
      <b-row>
        <b-button
          variant="dark"
          href="/"
          target="_self"
        >
          Zurück zur Startseite
        </b-button>
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
  computed: {

    eventDate () {
      if (this.event.Date) {
        const options = {
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(this.event.Date).toLocaleDateString('de-DE', options)
      } else {
        return 'Kein Datum angegeben'
      }
    },
    eventTime  () {
      if (this.event.Time) {
        return new Date(this.event.Time * 1000).toISOString().substr(11, 5)
      } else {
        return 'Keine Angabe'
      }
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
