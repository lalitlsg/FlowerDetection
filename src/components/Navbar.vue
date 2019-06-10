<template>
<nav>
        

        <v-toolbar  app>
            <v-toolbar-side-icon class="indigo--text" @click="drawer = !drawer"></v-toolbar-side-icon>
           <v-toolbar-title class="text-uppercase indigo--text">
               <span class="font-weight-light">knowyour</span>
               <span>plant</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           
           <v-menu offset-y>
               <v-btn flat slot="activator" color="indigo">
                   <v-icon left>expand_more</v-icon>
                   <span>Menu</span>
               </v-btn>
               <v-list>
                   <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                     <v-list-tile-title>{{link.text}}</v-list-tile-title>
                   </v-list-tile>
               </v-list>
           </v-menu>
           <a href="http://127.0.0.1:8050/">
           <v-btn flat color="green">
               <span>Detect Plant</span>
               <v-icon right>exit_to_app</v-icon>
           </v-btn></a>
           
        </v-toolbar>
        
        <v-navigation-drawer v-model="drawer" app class="indigo">
            <v-layout column align-center>
               <v-flex class="mt-5">
                   <v-avatar size="100">
                       <img src="/plant.jpg" >
                   </v-avatar>
                   <p class="white--text subheading mt-1">Know Your Plant</p>
               </v-flex>
           
            </v-layout> 
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-layout row justify-center>
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn color="blue" dark v-on="on">Take a Tour</v-btn>
                    </template>
                       <v-card>
                           <v-toolbar dark color="primary">
                               <v-btn icon dark @click="dialog = false">
                                   <v-icon>close</v-icon>
                               </v-btn> 
                               <v-toolbar-title>Convolutional Neural Network</v-toolbar-title>
                           </v-toolbar>
                           <v-timeline align-top class="mx-3"> 
                                <v-timeline-item 
                                v-for="(item,i) in items"
                                :key="i"
                                :color="item.color"
                                :icon="item.icon"
                                fill-dot
                                >
                                <v-card :color="item.color" dark>
                                    <v-card-title class="title">{{item.title}}</v-card-title>
                                    <v-card-text class="white text--primary">
                                            <p>{{item.text1}}<span class="font-weight-bold">{{item.text2}}</span></p>
                                           <v-dialog :v-model="item.dialog1" width="600" > 
                                             <template v-slot:activator="{ on }">
                                               <v-btn :color="item.color" dark v-on="on" outline>
                                                 {{item.button}}
                                                 </v-btn>
                                                 </template>
                                                 <img :src="item.image">
                                            </v-dialog>
                                    </v-card-text>
                                </v-card>
                                </v-timeline-item>
                                <v-timeline-item 
                                color="red"
                                icon="vpn_key"
                                fill-dot
                                >
                                <v-card color="red" dark>
                                    <v-card-title class="title">Key Terms</v-card-title>
                                    <v-card-text class="white text--primary">
               <v-expansion-panel popout>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>CNN</div>
            </template>
            <v-card>
              <v-card-text>Convolutional neural network. That is, a network which has at least one convolutional layer. A typical CNN also includes other types of layers, such as pooling layers and dense layers.</v-card-text>
            </v-card>
          </v-expansion-panel-content>

           <v-expansion-panel-content>
            <template v-slot:header>
              <div>Convolution</div>
            </template>
            <v-card>
              <v-card-text>The process of applying a kernel (filter) to an image</v-card-text>
            </v-card>
          </v-expansion-panel-content>
      

           <v-expansion-panel-content
           
          >
            <template v-slot:header>
              <div>Kernel / filter </div>
            </template>
            <v-card>
              <v-card-text>A matrix which is smaller than the input, used to transform the input into chunks</v-card-text>
            </v-card>
          </v-expansion-panel-content>
     <v-expansion-panel-content
           
          >
            <template v-slot:header>
              <div>Padding</div>
            </template>
            <v-card>
              <v-card-text>Adding pixels of some value, usually 0, around the input image</v-card-text>
            </v-card>
          </v-expansion-panel-content>

           <v-expansion-panel-content
           
          >
            <template v-slot:header>
              <div>Pooling </div>
            </template>
            <v-card>
              <v-card-text>The process of reducing the size of an image through downsampling.There are several types of pooling layers. For example, average pooling converts many values into a single value by taking the average. However, maxpooling is the most common.</v-card-text>
            </v-card>
          </v-expansion-panel-content>

                  <v-expansion-panel-content
           
          >
            <template v-slot:header>
              <div>Maxpooling </div>
            </template>
            <v-card>
              <v-card-text>A pooling process in which many values are converted into a single value by taking the maximum value from among them.</v-card-text>
            </v-card>
          </v-expansion-panel-content>

               <v-expansion-panel-content
           
          >
            <template v-slot:header>
              <div>Stride </div>
            </template>
            <v-card>
              <v-card-text>the number of pixels to slide the kernel (filter) across the image.</v-card-text>
            </v-card>
          </v-expansion-panel-content>

            <v-expansion-panel-content
           
          >
            <template v-slot:header>
              <div>Downsampling </div>
            </template>
            <v-card>
              <v-card-text>The act of reducing the size of an image</v-card-text>
            </v-card>
          </v-expansion-panel-content>
     
                                          </v-expansion-panel>

     

                                    </v-card-text>
                                </v-card>
                                </v-timeline-item>
                           </v-timeline>
                       </v-card>
                </v-dialog>
            </v-layout>
        </v-navigation-drawer>
    </nav></template>

<script>

  export default {
     data(){
        return{
            drawer: false,
            dialog: false,
    
            links:[
                {icon:'dashboard',text:"Dashboard",route:'/'},
                {icon:'book',text:"Guide",route:'/guide'},
                {icon:'person',text:"Students",route:'/students'},
                
                ],
            items:[
                {
                    color : 'red lighten-2',
                    icon : 'insert_photo',
                    title : 'Diagram',
                    button : 'View Diagram',
                    image : '/conv.jpg',
                    dialog1: false,
                    text1 : 'Artificial Intelligence has been witnessing a monumental growth in bridging the gap between the capabilities of humans and machines. Researchers and enthusiasts alike, work on numerous aspects of the field to make amazing things happen. One of many such areas is the domain of Computer Vision.The advancements in Computer Vision with Deep Learning has been constructed and perfected with time, primarily over one particular algorithm ',
                    text2 : '— a Convolutional Neural Network.' 
                },
                {
                    color : 'purple darken-1',
                    icon : 'star',
                    title : 'Introduction',
                    button : 'View Diagram',
                    image : '/intro.jpg',
                    dialog2: false,
                    text1 : 'A Convolutional Neural Network (ConvNet/CNN) is a Deep Learning algorithm which can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image and be able to differentiate one from the other. The pre-processing required in a ConvNet is much lower as compared to other classification algorithms. While in primitive methods filters are hand-engineered, with enough training, ConvNets have the ability to learn these filters/characteristics.'
                }
            ]    
              
              
        
        }
    }
  }
</script>