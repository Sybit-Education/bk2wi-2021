<template>
  <div
    v-once
    class="home"
  >
    <h1>Home</h1>
   <SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />


<SearchBar v-model="searchQuery" />
    <event-list   />
  </div>
</template>

<script>
import EventList from '@/components/events/EventList.vue'

export default {
  name: 'Home',
  components: { EventList }
}
</script>
