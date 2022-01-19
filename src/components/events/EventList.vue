<template>
  <div class="event-list">
    <b-overlay :show="isLoading" rounded="sm">
      <event-list-item v-for="event in events" :key="event.id" :event="event" />
    </b-overlay>
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
      events: [],
      isLoading: true
    }
  },
  mounted () {
    this.loadEvents()
  },
  methods: {
    async loadEvents () {
      this.events = await eventService.getSearchList("Fastnacht")
      this.isLoading = false
    }
  }
}
</script>
