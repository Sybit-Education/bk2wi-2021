<template>
  <div class="event-list">
    <div class="search-bar">
      <b-form @submit.prevent="loadEvents">
        <b-input-group>
          <b-form-input
            name="query"
            class="mr-sm-2"
            placeholder="Search..."
            v-model="query"
          />

          <template #prepend>
            <b-dropdown
              text="Filter"
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
    </div>
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
import tagService from '@/services/tag.service'

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
    this.loadTag()
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
    },
    async loadTag () {
      await tagService.getTagList()
    }
  }
}
</script>

<style scoped>
.search-bar {
  background-color: white;
  top: 0;
  position: sticky;
  z-index: 9;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.event-list{
  height: 100%;
}
</style>
