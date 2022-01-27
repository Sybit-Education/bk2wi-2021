<template>
  <div
    v-once
    class="home"
  >
    <h1>Home</h1>

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
<style scoped>
.newEventButton{
  color: rgb(255, 0, 0);
  background-color: rgba(255, 0, 0, 0);
  border-color: rgb(255, 0, 0);
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
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

</style>

<script>
import EventList from '@/components/events/EventList.vue'

export default {
  name: 'HomeView',
  components: { EventList }
}
</script>
