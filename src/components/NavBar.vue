<template>
  <b-navbar
    class="navbarStyle"
    type="dark"
    variant="info"
    toggleable="md"
  >
    <b-container>
      <b-navbar-brand
        to="/"
        title="Event4U"
      >
        <b-img
          class="d-inline-block align-top"
          src="/img/Logo1.png"
          height="30"
          alt="event-app Logo"
        />
        Events4U
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
          <b-nav-item to="/impressum">
            Impressum
          </b-nav-item>
          <b-nav-item />
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
