<template>
 <div class="guide">


  <v-container class="my-3">
       <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-xs-center ma-3" height="250">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar" >
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text pt-3">{{person.role}}</div>
              </v-card-text>
            
            </v-card>
          </v-flex>
       </v-layout>
  </v-container>
</div>
</template>

<script>




export default {
     data(){
       return{
         team:[
           {name:'Neha Donglikar',role:'SGGSIE&T,Nanded',avatar:''},
           
           ],
        
           
       }
     
     },
  
}
</script>
