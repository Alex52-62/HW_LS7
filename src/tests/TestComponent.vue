<template>
  <div>
      The message is: {{ message }} (modified)
  </div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>