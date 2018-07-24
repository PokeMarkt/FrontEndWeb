<template>
  <div id="app">
    <nav class="navbar danger-color-dark navbar-expand-lg navbar-dark py-1">
      <div class="navbar-brand mr-4">
				PokeMarkt!
			</div>
      <post-finder class="centeredSearch"/>
    </nav>
    <PostContainer/>
    <!-- <router-view/> -->
    
  </div>
</template>

<script>
import PostFinder from './components/PostFinder.vue'
import Post from './components/Post.vue'
import PostContainer from './components/PostContainer.vue'

export default {
  name: 'App',
  components: {
    PostFinder,
    Post,
    PostContainer
  }
}
</script>

<style>

@import url('https://unpkg.com/vue-material@beta/dist/vue-material.min.css');
@import url('https://unpkg.com/vue-material@beta/dist/theme/default.css');
@import url("http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900");


#app {
  font-family: 'Roboto';
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.centeredSearch {
  float: none;
  margin: auto;
}

</style>
