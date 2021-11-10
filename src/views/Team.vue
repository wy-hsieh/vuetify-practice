<template>
  <div class="team pa-4">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn elevation=0 color="grey lighten-4">
                  <v-icon>mdi-message</v-icon>
                  <span>message</span>
                </v-btn>
              </v-card-actions>
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        { name: 'wyhsieh', role: 'web developer', avatar: '/avatar/avatar.png' },
        { name: 'ryu', role: 'Graphic designer', avatar: '/avatar/avatar.png' },
        { name: 'Chun Li', role: 'web developer', avatar: '/avatar/avatar.png' },
        { name: 'Gouken', role: 'Socal media maverick', avatar: '/avatar/avatar.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar/avatar.png' }
      ]
    }
  }
}
</script>
