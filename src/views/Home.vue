<template>
  <div class="home">
     <h1 class="subheading indigo--text mt-3 mx-4">Dashboard</h1>
    
    <v-container fluid  grid-list-md class="my-3">
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md6 >
             <v-card height="250"> 
               
        <v-img
          class="white--text"
          height="250px"
          src="plant1.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">About Project</span>
                <div>
                  <p></p>
                  <p>This Project is about detection of plants species from their parts<br>like
                      flowers, fruits and leaves.It use machine learning algorithms<br>to detect 
                      the maximum probable plants from image we provided.<br>This project can be 
                      useful to people who wants deep study about<br> the differents plants and theirs 
                      properties like botanist.
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
             </v-card>
         </v-flex>
    
          <v-flex d-flex xs12 sm6 md6>
             <v-card  height="250"> 

               <v-img
          class="white--text"
          height="250px"
          src="plant2.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">How It Works?</span>
                <div>
                  <p></p>
                  <p>1.Go to detect plant button on navbar.<br>
                     2.Drag the image you want to study about.<br>
                     3.Click on the Detect Button to see the results<br>
                     4.Result contains properties of your plant.
                                    
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        
             </v-card>
         </v-flex>

          <v-flex d-flex xs12 sm6 md6>
             <v-card height="250">
               <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Sample Output</span>
                <v-layout row>
                <div class="mt-2">
                      <v-img width="150px" height="150px" src="flower.JPG"></v-img>
                </div>
                <div column class="mx-3 mt-2">
                <h3 class="mb-3">Name : Aster</h3>
                <h3 class="mb-3">Family : Asteraceae</h3>
                <h3 class="mb-3">Colors : White,Red,Pink,Purple</h3>
                <h3 class="mb-3">Places : North America,Europe</h3>
                </div>
                </v-layout>
              </v-flex>

            </v-layout>
          </v-container>
             </v-card>
         </v-flex>
         <v-flex d-flex xs12 sm6 md6>
             <v-card  height="250"> 

               <v-img
          class="white--text"
          height="250px"
          src="cnn.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">About CNN</span>
                <div>
                  <p></p>
                  <p>CNN is a convolution neural network which is a part of machine<br> learning
                     specially used for image processing , classification and <br>recognition.
                     This project is also based on convolution neural network.               
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        
             </v-card>
         </v-flex>
        


        
        </v-layout>
     </v-container>

  </div>
</template>

<script>

  export default {

  }
</script>
