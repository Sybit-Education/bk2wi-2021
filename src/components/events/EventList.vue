<template>
  <div class="event-list">
    <b-overlay
      :show="isLoading"
      rounded="sm"
    >
      <event-list-item
        v-for="event in events"
        :key="event.id"
        :event="event"
      />
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
  props: {
    query: {
      type: String,
      default: null
    }
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
      if (this.query == null) {
        this.events = await eventService.getList()
      } else {
        this.events = await eventService.getSearchList(this.query)
      }
      this.isLoading = false
    }
  }
}
</script>
