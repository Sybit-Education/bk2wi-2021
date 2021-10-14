<template>
  <b-navbar
    type="dark"
    variant="dark"
    toggleable="md"
  >
    <b-container>
      <b-navbar-brand
        to="/"
        title="event-app"
      >
        <b-img
          class="d-inline-block align-top"
          src="https://dummyimage.com/30/878787/000000&text=Logo"
          height="30"
          alt="event-app Logo"
        />
        EvantApp
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
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'

}
</script>
