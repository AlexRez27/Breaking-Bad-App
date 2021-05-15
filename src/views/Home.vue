<template>
  <div>
    <form
      action="#"
    >
      <h1 class="title">
        BREAKING BAD APP
      </h1>
      <BreakingBadInfo />
      <div
        class="row"
      >
        <div class="input-field col s12">
          <label
            for="episode"
          >Episodes</label>
          <input
            v-model.trim="episode"
            id="episode"
            name="episode"
            type="text"
            class="form__input validate"
            value="Ozymandias"
          >
          <small
            class="invalid"
            v-if="$v.episode.$dirty && !$v.episode.required"
          >
            This field musn't be empty
          </small>
        </div>
          <button
            @click.prevent="getEp()"
            class="waves-effect waves-light btn"
          >
            Search
          </button>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label
            for="character"
          >Characters</label>
          <input
            v-model.trim="character"
            id="character"
            name="character"
            type="text"
          >
          <small
            class="invalid"
            v-if="$v.character.$dirty && !$v.character.required"
          >
            This field musn't be empty
          </small>
        </div>
          <button
            @click.prevent="getCh()"
            class="waves-effect waves-light btn"
          >
            Search
          </button>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label
            for="quote"
          >Quotes</label>
          <input
            v-model.trim="quote"
            id="quote"
            name="quote"
            type="text"
          >
          <small
            class="invalid"
            v-if="($v.quote.$dirty && !$v.quote.required)"
          >
            This field musn't be empty
          </small>
        </div>
          <button
            @click.prevent="getQuote()"
            class="waves-effect waves-light btn"
          >
            Search
          </button>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label
            for="deads"
            class="form__label"
          >Deads</label>
          <input
            v-model.trim="deads"
            id="deads"
            name="deads"
            type="text"
            class="form__input"
          >
          <small
            class="invalid"
            v-if="$v.deads.$dirty && !$v.deads.required"
          >
            This field musn't be empty
          </small>
        </div>
          <button
            @click.prevent="getDeath()"
            class="waves-effect waves-light btn"
          >
            Search
          </button>
      </div>
    </form>
    <router-link to="OccupationList">
      <button class="waves-effect waves-light btn occupation">
        OCCUPATION LIST
      </button>
    </router-link>
  </div>
</template>

<script>
import BreakingBadInfo from '@/components/BreakingBadInfo'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'Home',
  components: {
    BreakingBadInfo
  },
  data () {
    return {
      episode: '',
      character: '',
      quote: '',
      deads: ''
    }
  },
  validations: {
    episode: { required },
    character: { required },
    quote: { required },
    deads: { required }
  },
  methods: {
    getEp () {
      if (this.$v.episode.$invalid) {
        this.$v.episode.$touch()
      } else {
        this.$router.push({
          name: 'EpisodeInfo',
          params: {
            value: this.episode
          }
        })
      }
    },
    getCh () {
      if (this.$v.character.$invalid) {
        this.$v.character.$touch()
      } else {
        this.$router.push({
          name: 'CharacterInfo',
          params: {
            value: this.character
          }
        })
      }
    },
    getDeath () {
      if (this.$v.deads.$invalid) {
        this.$v.deads.$touch()
      } else {
        this.$router.push({
          name: 'DeathInfo', params: { value: this.deads }
        })
      }
    },
    getQuote () {
      if (this.$v.quote.$invalid) {
        this.$v.quote.$touch()
      } else {
        this.$router.push({
          name: 'QuoteInfo', params: { value: this.quote }
        })
      }
    }
  }
}
</script>

<style lang="scss">
    .title {
      text-align: center;
    }
    .invalid{
      color:#f44336;
      display: block;
      font-size: 14px;
      }
      .input-field{
        height: 75px;
      }
      .btn{
        margin-left: 10px;
      }
      .occupation{
        margin-top: 20px;
      }
</style>
