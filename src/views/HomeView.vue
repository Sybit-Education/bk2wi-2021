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
    >
      <b-icon
        icon="plus-circle"
        aria-hidden="true"
        variant="dark"
      />
    </b-button>
  </div>
</template>
<style scoped>
.newEventButton{
  position: fixed;
  right: 1rem;
  z-index: 10;
  bottom: 0.1rem;
  border-radius: 50%;
  font-size: 1.4rem;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
 padding: 0.2rem;
}

</style>

<script>
import EventList from '@/components/events/EventList.vue'

export default {
  name: 'HomeView',
  components: { EventList }
}
</script>
