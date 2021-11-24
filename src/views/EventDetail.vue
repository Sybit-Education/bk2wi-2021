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
  mounted () {
    eventService.getEvent(this.$route.params.id)
  }
}
</script>
