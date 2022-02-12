<template>
  <b-form
    class="event-form"
    @submit.prevent="saveEvent"
  >
    <b-form-group
      label="Event Name"
      label-for="event name"
    >
      <b-form-input
        id="event-name"
        v-model="event.Eventname"
        required
      />
    </b-form-group>

    <b-form-group
      label="Vorname"
      label-for="FirstName"
    >
      <b-form-input
        id="firstname"
        v-model="event.FirstName"
        required
      />
    </b-form-group>

    <b-form-group
      label="Nachname"
      label-for="name"
    >
      <b-form-input
        id="Name"
        v-model="event.Name"
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
        v-model="event.Date"
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
        firstname: '',
        lastname: '',
        location: '',
        Date: null,
        Description: '',
        Status: 'Überprüfung'
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
