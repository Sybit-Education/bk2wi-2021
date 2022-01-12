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
              <b-navbar type="light" variant="light">
                <b-nav-form>
                    <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
              </b-navbar>
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
