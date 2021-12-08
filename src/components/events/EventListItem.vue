<template>
   <b-link :to="eventLink">
     <b-card
      :title="event.Eventname"
      class="event-list-item mb-3">
      <div class="event-list-item__location">
        {{ event.location }}
      </div>
      <div class="event-list-item__date">
        {{ event.Date }}
      </div>
      <div class="event-list-item__description">
        {{ event.Description }}
      </div>
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
.event-list-item{
  background-color: rgba(112, 108, 108, 0.199);
  color: black;
}
</style>
