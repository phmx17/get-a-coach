<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm';
export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data) // coaches = namespace registerCoach = action (mutation by the same name)
      this.$router.replace('/coaches'); // replace instead of push; does not allow to 'go back' in the browser
    }
  }
}
</script>