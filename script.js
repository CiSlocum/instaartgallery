const curateButton = document.getElementById('curate'),
      gallery = document.getElementById('gallery');

const tags = ['feminist', 'acrylic'],
      numberOfImages = 5;


function curateGallery(requestedTags) {
  
  // retrieve 20 images based on our tags
  getFlickrImages('https://api.flickr.com/services/feeds/photos_public.gne?tags=' + tags.join() + '&format=json', function(data){  
  
  const images = data.items;  
  
  // empty the gallery
  gallery.innerHTML= '';
    
  for(let i=0; i < numberOfImages;i ++) {
    let image = images[i];
    // put these images in our gallery
    let img = `<img src='${image.media.m}'>`;
    
    gallery.innerHTML += img;
    console.log(image);
  }  
});

  
} 

curateButton.addEventListener('click', curateGallery);









/**
 Ignore for now: This code pulls Flickr images from the public feed
*/

function getFlickrImages(url, callback) {
    var callbackName = 'jsonFlickrFeed';
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
