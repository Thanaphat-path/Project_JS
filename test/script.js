// Anime
var anime = [
  {
    fantasy: [
      {
        title: "Sword Art Online: Alicization - War of Underworld",
        genre: "fantasy",
        description:
          "The Soul Translator is a state-of-the-art full-dive interface which interacts with the user's Fluctlight—the technological equivalent of a human soul—and fundamentally differs from the orthodox method of sending signals to the brain.",
        airingDate: "October 12, 2019",
        imgSrc:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108759-jcXbDf9BJTcb.jpg"
      }
    ]
  }
];

var app = new Vue({
  el: "#anime",
  data: {
    anime: anime[0],
    active: false
  
  },
  methods:{
    setActive: function(){
      this.active = !this.active;
      console.log('greeting.', this.active);
    }
  }
});