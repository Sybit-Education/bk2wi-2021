<template>
  <div
    v-once
    class="home"
  >
    <h1>Home</h1>
   <div>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
</div>
    <event-list   />
  </div>
</template>

<script>
import EventList from '@/components/events/EventList.vue'

export default {
  name: 'Home',
  components: { EventList }
}
</script>
