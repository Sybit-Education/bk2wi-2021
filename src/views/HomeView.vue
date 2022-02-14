<template>
  <div
    v-once
    class="home"
  >
    <event-list />
    <b-button
      to="/new"
      class="add-event-button"
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
export default {
  name: 'HomeView',
  components: { EventList }
}
</script>
<style scoped>
.add-event-button {
  color: rgb(219, 34, 34);
  background-color: rgba(255, 255, 255, 100);
  border-color: rgba(255, 0, 0, 0);
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
</style>
