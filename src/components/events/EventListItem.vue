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
          <div class="event-list-item__date">Datum: {{ event.Date }}</div>
          <div class="event-list-item__Time">Uhrzeit: {{ event.Time }}</div>
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
