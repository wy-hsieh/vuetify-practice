<template>
  <div class="projects pa-4">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>
              {{ project.title }}
            </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text>
                <div class="font-weight-blod">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        { title: 'Design a new website', person: 'WyHsieh', due: '5th Nov 2021', status: 'ongoing', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fuga sapiente adipisci, dolore veniam quisquam ad asperiores fugiat excepturi nam consequatur vel inventore ipsa doloremque est doloribus officia accusantium hic!' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Nov 2021', status: 'complete', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fuga sapiente adipisci, dolore veniam quisquam ad asperiores fugiat excepturi nam consequatur vel inventore ipsa doloremque est doloribus officia accusantium hic!' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '15th Nov 2021', status: 'complete', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fuga sapiente adipisci, dolore veniam quisquam ad asperiores fugiat excepturi nam consequatur vel inventore ipsa doloremque est doloribus officia accusantium hic!' },
        { title: 'Create a community gorum', person: 'Gouken', due: '20th Nov 2021', status: 'overdue', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fuga sapiente adipisci, dolore veniam quisquam ad asperiores fugiat excepturi nam consequatur vel inventore ipsa doloremque est doloribus officia accusantium hic!' },
        { title: 'Design a new website.. again', person: 'WyHsieh', due: '25th Nov 2021', status: 'ongoing', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fuga sapiente adipisci, dolore veniam quisquam ad asperiores fugiat excepturi nam consequatur vel inventore ipsa doloremque est doloribus officia accusantium hic!' }
      ]
    }
  },
  computed: {
    myProjects () {
      return this.projects.filter(prject => {
        return prject.person === 'WyHsieh'
      })
    }
  }
}
</script>
