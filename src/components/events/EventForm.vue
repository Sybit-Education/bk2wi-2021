<template>
  <b-form class="event-form">
    <b-form-group
      label="Name"
      label-for="name"
    >
      <b-form-input
        id="name"
        v-model="event.Eventname"
        required
      />
    </b-form-group>
    <b-form-group
      label="Ort"
      label-for="location"
    >
      <b-form-input
        id="location"
        v-model="event.location"
        required
      />
    </b-form-group>
    <b-form-group
      label="Datum"
      label-for="date"
    >
      <b-form-input
        id="date"
        v-model="event.date"
        required
        type="date"
      />
    </b-form-group>
    <b-form-group
      label="Beschreibung"
      label-for="description"
    >
      <b-form-textarea
        id="description"
        v-model="event.Description"
        required
      />
    </b-form-group>
    <b-button
      type="submit"
      variant="primary"
      @click="saveEvent"
    >
      Speichern
    </b-button>
  </b-form>
</template>

<script>
import eventService from '@/services/event.service'
export default {
  name: 'EventForm',
  data () {
    return {
      event: {
        Eventname: '',
        location: '',
        Description: ''
      }
    }
  },
  methods: {
    saveEvent () {
      eventService
        .save(this.event)
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
