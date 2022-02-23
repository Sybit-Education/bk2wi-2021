<template>
  <div
    v-once
    class="about"
  >
    <h1>
      Über uns:<b-button class="secret" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
        Secret
      </b-button>
    </h1>

    <p>
      Wir, das Events4u Team sind eine engagierte Gruppe von Schülern, welche sich in der Klasse zusammengetan haben, um mit unserem gemeinsamen Know-How eine App/Website zu entwickeln.
      Im Herbst des Jahres 2021 wurde Events4u von uns gegründet um den Leuten die spontan bock auf’s feiern haben, eine helfende Hand zu reichen. Unsere App bietet eine Möglichkeit Events wie Feiern, Festivals und Geburtstage in der Umgebung von einem zu sehen und daran teilzunehmen.
      Für uns steht ihr, die die bei uns nach Events suchen im Mittelpunkt, deshalb haben wir uns auch für den Namen Events4u entschieden.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  metaInfo: {
    title: 'Über'
  }
}
</script>
<style scoped>
.secret{
  color: white;
  size: 200px;
  background-color: white;
   border-top-style: hidden;
      border-right-style: hidden;
      border-left-style: hidden;
      border-bottom-style: hidden;
}
</style>
