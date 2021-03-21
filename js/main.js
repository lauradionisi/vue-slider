var app = new Vue ({
    el: '#app',
    data : {
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg'
        ]        
    },

    // created: function () {
    //     setInterval(() => {
    //         this.nextPhoto();
    //     }, 3000);
    // },

    methods : {
        

        goToPhoto: function(index) {
            this.counterPhoto = index;   
        },
        
        prevPhoto: function() {
            this.counterPhoto -= 1;

            if(this.counterPhoto < 0) this.counterPhoto = (this.photos.length - 1);
        },
        nextPhoto: function() {
            this.counterPhoto += 1;

            if(this.counterPhoto > (this.photos.length - 1)) this.counterPhoto = 0;
        },

    },
})
console.log(app);

