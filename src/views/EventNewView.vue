<template>
  <div class="event-new-view">
    <h1>Neues Event einreichen</h1>
    <event-form />
  </div>
</template>

<script>
import EventForm from '@/components/events/EventForm.vue'
export default {
  components: { EventForm },
  name: 'EventNewView'
}
</script>
