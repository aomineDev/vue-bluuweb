<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="md" type="dark" variant="dark">
        <b-container>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
              <b-nav-item :to="{name: 'about'}">About</b-nav-item>
              <b-nav-item :to="{name: 'grid'}">Grid</b-nav-item>
              <b-nav-item :to="{name: 'card'}">Card</b-nav-item>
              <b-nav-item :to="{name: 'form'}">Form</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>