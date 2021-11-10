<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn elevation=0 v-bind="attrs" v-on="on" class="success">
        Add new project
      </v-btn>
    </template>
    <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

            <v-menu offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="due" label="Due date" v-bind="attrs" v-on="on" prepend-icon="mdi-calendar"></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn elevation=0 class="success mx-0 mt-3" @click="sumbit" :loading="loading">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  </v-dialog>
</template>

<script>
import db from '@/fb'

export default {
  data () {
    return {
      loading: false,
      dialog: false,
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    sumbit () {
      if (this.$refs.form.validate()) {
        this.loading = true

        const key = db.ref().push().key
        db.ref('/' + key).set({
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'wyhsieh',
          status: 'ongoing'
        }).then(() => {
          console.log('added to db')
          this.loading = false
          this.dialog = false
          this.$emit('projectAdded')
        })
      }
    }
  }
}
</script>
