<template>
  <div
    v-once
    class="home"
  >
    <h1>Home</h1>
    <event-list />
  </div>
</template>

<script>
import EventList from '@/components/events/EventList.vue'

export default {
  name: 'Home',
  components: { EventList }
}
</script>
