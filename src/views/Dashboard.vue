<template>
  <div class="dashboard pa-4">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-4">

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small elevation="0" color="grey lighten-2 mx-4" @click="sortBy('title')"  v-bind="attrs" v-on="on">
              <v-icon left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small elevation="0" color="grey lighten-2" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>

      </v-layout>

      <v-card flat tile class="pa-3" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">

          <v-col cols="12" sm="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col cols="2" sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>

        </v-row>

      </v-card>

    </v-container>

  </div>
</template>

<script>
import db from '@/fb'

export default {
  data () {
    return {
      projects: []
    }
  },
  methods: {
    sortBy (prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created () {
    db.ref().on('value', (snapshot) => {
      const results = Object.values(snapshot.val())
      results.forEach(result => {
        console.log(result)
        this.projects.push(result)
      })
    })
  }
}
</script>

<style scoped>

.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}

</style>
