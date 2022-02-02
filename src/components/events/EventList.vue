<template>
  <div class="event-list">
    <b-form @submit.prevent="loadEvents">
      <b-input-group class="seearch-bar">
        <b-form-input
          name="query"
          class="mr-sm-2"
          placeholder="Search..."
          v-model="query"
        />

        <template #prepend>
          <b-dropdown
            text="Tags"
            variant="outline-secondary"
          >
            <b-dropdown-item>Freitagabend</b-dropdown-item>
            <b-dropdown-item>Samstagabend</b-dropdown-item>
            <b-dropdown-item>Club</b-dropdown-item>
            <b-dropdown-item> Ü18</b-dropdown-item>
            <b-dropdown-item> Mit Alkoholverkauf</b-dropdown-item>
            <b-dropdown-item>Ohne Alkoholverkauf</b-dropdown-item>
            <b-dropdown-item>Festivals</b-dropdown-item>
          </b-dropdown>
        </template>
        <b-button
          variant="outline-secondary"
          type="submit"
        >
          <b-icon
            icon="check"
            aria-hidden="true"
            variant="success"
          />
        </b-button>
      </b-input-group>
    </b-form>

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
  data () {
    return {
      query: null,
      events: [],
      isLoading: true
    }
  },
  mounted () {
    this.loadEvents()
  },
  methods: {
    async loadEvents () {
      this.isLoading = true
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

<style scoped>
.search-bar {
  border: black;
  position: sticky;
  background-color: white;
  z-index: 9;
  right: 0rem;
  top: 0rem;
}
</style>
