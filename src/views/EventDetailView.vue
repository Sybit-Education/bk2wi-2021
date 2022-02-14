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
        src="https://via.placeholder.com/850x310.png?text=Bild"
        fluid-grow
        alt="Fluid-grow image"
      />
      <h4>{{ event.Eventname }}</h4>
      <br>
      <p>
        Datum: {{ event.Date }}
        <br>
        Uhrzeit: {{ event.Time }}
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
          variant="success"
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

<style>
b.img{
  height: 0rem;
  width: 0rem;
}
</style>
