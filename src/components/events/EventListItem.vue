<template>
  <div>
    <div class="event-list-item mb-3">
      <h2 class="event-list-item__title">
      <b-link :to="eventLink"> {{ event.Eventname }}</b-link> 
      </h2>
      <div class="event-list-item__location">
        {{ event.location }}
      </div>
      <div class="event-list-item__date">
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
  }, 
  computed:{
    eventLink(){
      return '/event/'+  this.event.id
    }
  }
}
</script>
