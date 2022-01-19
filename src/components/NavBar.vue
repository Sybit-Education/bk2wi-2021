<template>
  <b-navbar
    type="dark"
    variant="dark"
    toggleable="md"
  >
    <b-container>
      <b-navbar-brand
        to="/"
        title="Event4U"
      >
        <b-img
          class="d-inline-block align-top"
          src="https://dummyimage.com/30/878787/000000&text=Logo"
          height="30"
          alt="event-app Logo"
        />
        Event4U
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="/about">
            Über
          </b-nav-item>
              <b-navbar type="light" variant="dark">
                <b-nav-form>
                  <b-form-input class="mr-sm-2" placeholder="Search" v-model="searchbar"></b-form-input>
                </b-nav-form>
              <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-navbar>
            <b-nav-item >
              Samstagabend
            </b-nav-item>
            <b-nav-item >
              Freitagabend
            </b-nav-item>
            <b-nav-item >
              Club
            </b-nav-item>
            <b-nav-item >
              Ü18
            </b-nav-item>
            <b-nav-item >
              Mit Alkoholverkauf
            </b-nav-item>
            <b-nav-item >
              Ohne Alkoholverkauf
            </b-nav-item>
            <b-nav-item >
              Festivals
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import eventService from '@/services/event.service'
export default {
  name: 'NavBar',
  data(){
    return{
      searchbar
    }
  }
}
</script>
