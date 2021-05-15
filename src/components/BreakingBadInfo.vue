<template>
  <div>
    <Loader v-if="loading" />
    <div
      v-else
    >
      <div class="info">
        <img
          :src="getInfo.Poster"
          alt="Poster"
        >
        <ol class="info__block">
          <li><b>Actors: </b>{{getInfo.Actors}}</li>
          <li><b>Awards: </b>{{getInfo.Awards}}</li>
          <li><b>Country: </b>{{getInfo.Country}}</li>
          <li><b>Director: </b>{{getInfo.Director}}</li>
          <li><b>Genre: </b>{{getInfo.Genre}}</li>
          <li><b>Language: </b>{{getInfo.Language}}</li>
          <li><b>Plot: </b>{{getInfo.Plot}}</li>
          <li><b>Rated: </b>{{getInfo.Rated}}</li>
          <li><b>Released: </b>{{getInfo.Released}}</li>
          <li><b>Runtime: </b>{{getInfo.Runtime}}</li>
          <li><b>Title: </b>{{getInfo.Title}}</li>
          <li><b>Type: </b>{{getInfo.Type}}</li>
          <li><b>Writer: </b>{{getInfo.Writer}}</li>
          <li><b>Year: </b>{{getInfo.Year}}</li>
          <li><b>imdbID: </b>{{getInfo.imdbID}}</li>
          <li><b>imdbRating: </b>{{getInfo.imdbRating}}</li>
          <li><b>imdbVotes: </b>{{getInfo.imdbVotes}}</li>
          <li><b>totalSeasons: </b>{{getInfo.totalSeasons}}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BreakingBadInfo',
  components: {
    Loader
  },
  data () {
    return {
      loading: false,
      data: {}
    }
  },
  computed: mapGetters(['getInfo']),
  methods: {
    ...mapActions(['getData'])
  },
  async mounted () {
    await this.getData({ baseUrl: 'OMDB' })
  }
}
</script>

<style lang="scss">
  .info{
    display: flex;
    margin: 0 auto;
    width: 65%;
    font-family: "Josefin Sans", Arial;
  }
</style>
