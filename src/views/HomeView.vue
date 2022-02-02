<template>
  <div
    v-once
    class="home"
  >
    <b-input-group class="suchleisteAussehen">
      <b-form-input
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
        @click="searchEvents"
      >
        <b-icon
          icon="check"
          aria-hidden="true"
          variant="success"
        />
      </b-button>
    </b-input-group>

    <event-list />
    <b-button
      to="/new"
      class="newEventButton"
      variant="danger"
    >
      <b-icon
        icon="plus"
        aria-hidden="true"
      />
    </b-button>
  </div>
</template>

<script>
import EventList from '@/components/events/EventList.vue'
import eventService from '@/services/event.service'
export default {
  name: 'HomeView',
  components: { EventList },

  data () {
    return {
      query: null
    }
  },
  methods: {
    async searchEvents () {
      this.events = await eventService.getSearchList(this.query)
      this.isLoading = false
    }
  }
}

</script>
<style scoped>
.newEventButton{
  color: rgb(219, 34, 34);
  background-color: rgba(255,255,255,100);
  border-color: rgba(255,0,0,0);
  border-width: 0.2rem;
  width: 4.5rem;
  height: 4.5rem;
  position: fixed;
  right: 1rem;
  z-index: 10;
  bottom: 0.5rem;
  border-radius: 50%;
  font-size: 2.85rem;
  padding: 0;
  border-color: red;
}
.suchleisteAussehen{
  border: black;
  position: sticky;
  background-color: white;
  z-index: 9;
  right: 0rem;
  top: 0rem;

}

</style>
