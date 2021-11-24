<template>
  <div>
    <div class="event-list-item mb-3">
      <h2 class="event-list-item__title">
        {{ event.Eventname }}
      </h2>
      <div class="event-list-item__notes">
        {{ event.location }}
      </div>
        <div class="event-list-item__notes">
        {{ event.Date }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventListItem',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
