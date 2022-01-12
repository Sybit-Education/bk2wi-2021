<template>
  <div
    v-once
    class="home"
  >
    <h1>Home</h1>
   <div>
    <event-list   />
  </div>
</template>

<script>
import EventList from '@/components/events/EventList.vue'

export default {
  name: 'HomeView',
  components: { EventList }
}
</script>
