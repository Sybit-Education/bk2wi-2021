<template>
  <b-link :to="eventLink">
    <b-card class="event-list-item mb-3">
      <b-row>
        <b-col cols="2">
          <b-img
            src="https://via.placeholder.com/150?text=Event"
            :alt="event.Eventname"
            thumbnail
            fluid
          />
        </b-col>
        <b-col>
          <h3>{{ event.Eventname }}</h3>
          <div class="event-list-item__date">Datum: {{ eventDate }}</div>
          <div class="event-list-item__Time">Uhrzeit: {{ eventTime }}</div>
          <div class="event-list-item__location">Wo: {{ event.location }}</div>
        </b-col>
      </b-row>
    </b-card>
  </b-link>
</template>
<script>
export default {
  name: 'EventListItem',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    eventLink () {
      return '/event/' + this.event.id
    },
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
    eventTime () {
      if (this.event.Time) {
        return new Date(this.event.Time * 1000).toISOString().substr(11, 5)
      } else {
        return 'Keine Zeitangabe'
      }
    }
  }
}
</script>
<style scoped>
.event-list-item {
  background-color: rgba(112, 108, 108, 0.199);
  color: black;
}
</style>
