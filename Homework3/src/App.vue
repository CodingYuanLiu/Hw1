<template>
  <div id="app">
    <div align="center"><img src="./assets/logo.png"></div>
    <div align="center"><font size="8">Word Ladder by Vue.js</font></div>
    <br/>
    <br/>
    <table align="center">
            <tr>
                <td><div><font size="4">Start:</font></div></td>
                <td><input v-model="start" class="mytxt"></td>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <td><div><font size="4">Destination:</font></div></td>
                <td><input v-model="destination" class="mytxt"></td>
            </tr>
    </table>
    <div align="center">
      <br/>
      <br/>
      <button @click="v_getladder()" class="button">Getladder</button>
    </div>
    <br/>
    <p align="center" class="result">Result:{{message}}</p>
  </div>
</template>

<script>
import { getladder,clone,Word,in_dictionary } from './getladder.js'
export default {
  name: 'App',
  data () {
    return {
      start: 'code',
      destination: 'data',
      message: 'Empty',
      smalldic:['cade','cate','code','data','date'],
      dictionary:[]
    }
  },
  methods: {
    v_getladder: function () {
      for(var str in this.smalldic)
      {
        this.dictionary.push(new Word(this.smalldic[str]));
      }
      this.message = getladder(this.start,this.destination,this.dictionary.clone())
      return this.message
    },
    v_in_dictionary: function(string,dictionary) {
      return in_dictionary(string,dictionary)
    }
  }

}
</script>

<style>
  @import './../static/style.css';
</style>
