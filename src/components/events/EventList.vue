<template>
  <div class="event-list">
    <div class="event-list__header" />

    <event-list-item v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventListItem from '@/components/events/EventListItem.vue'
import eventService from '@/services/event.service'

export default {
  name: 'EventList',
  components: {
    EventListItem
  },
  data () {
    return {
      events: []
    }
  },
  mounted () {
    this.loadEvents()
  },
  methods: {
    async loadEvents () {
      this.events = await eventService.getList()
    }
  }
}
</script>
