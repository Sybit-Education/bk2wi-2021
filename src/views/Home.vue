<template>
  <div
    v-once
    class="home"
  >
    <h1>Home</h1>
   <b-input-group size="lg" >
    <b-form-input placeholder="Serach..." type="search"></b-form-input>
  </b-input-group>
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
