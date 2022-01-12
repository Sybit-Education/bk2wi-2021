<template>
  <div class="event-detail">
    <b-overlay :show="isLoading" rounded="sm" no-wrap />
    <div v-if="event">
      <h1>{{ event.Eventname }}</h1>

      <b-carousel
        id="event-detail"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=54"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=55"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>
      </b-carousel>

      <b-row>
        <b-col>Ort: {{ event.location }}</b-col>
        <b-col>Datum: {{ event.Date }}</b-col>
        <b-col>Beschreibung: {{ event.Description }}</b-col>
      </b-row>
      <b-row>
        <b-button variant="success" href="/" target="_self"
          >Zurück zur Startseite</b-button
        >
      </b-row>
    </div>
  </div>
</template>

<script>
import eventService from '@/services/event.service'
export default {
  name: 'EventDetailView',
  data () {
    return {
      event: null,
      eventId: this.$route.params.id,
      isLoading: true
    }
  },
  mounted () {
    this.loadEvent(this.eventId)
  },
  methods: {
    async loadEvent (id) {
      this.event = await eventService.getEvent(id)
      this.isLoading = false
    }
  }
}
</script>
