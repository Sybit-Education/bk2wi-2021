<template>
  <div
    v-once
    class="privacy"
  >
    <h1>Event Detail</h1>
  </div>
</template>

<script>
import eventService from '../services/event.service'
export default {
  name: 'EventDetail',
  data () {
    return {
      event: {},
      eventId: this.$route.params.id
    }
  },
  mounted () {
    this.event = eventService.getEvent(this.eventId)
  }
}
</script>
