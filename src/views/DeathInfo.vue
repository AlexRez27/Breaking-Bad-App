<template>
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <h4 v-if="noData">
        There is no such death &#128542;
      </h4>
      <div v-else>
        <ul
          v-if="!noData"
          class="collection with-header"
        >
          <li class="collection-header">
            Death of {{ getInfo[0].death }}
          </li>
          <li class="collection-item">
            <b>Cause: </b>{{ getInfo[0].cause }}
          </li>
          <li class="collection-item">
            <b>Season: </b>{{ getInfo[0].season }}
          </li>
          <li class="collection-item">
            <b>Episode: </b>{{ getInfo[0].episode }}
          </li>
          <li class="collection-item">
            <b>Last words: </b>{{ getInfo[0].last_words }}
          </li>
          <li class="collection-item">
            <b>Responsible: </b>{{ getInfo[0].responsible }}
          </li>
        </ul>
      </div>
    </div>
    <router-link to="/">
      <button class="waves-effect waves-light btn">
        Back to home
      </button>
    </router-link>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DeathInfo',
  components: {
    Loader
  },
  computed: mapGetters(['getInfo']),
  data () {
    return {
      loading: true,
      noData: true
    }
  },
  async mounted () {
    const par = {
      entity: 'death',
      name: this.$route.params.value
    }
    await this.getData(par)
    if (this.getInfo.length) {
      this.noData = false
    } else {
      this.noData = true
    }
    this.loading = false
  },
  methods: {
    ...mapActions(['getData'])
  }
}
</script>
