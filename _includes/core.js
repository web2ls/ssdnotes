window.onload = function() {
  function changeLikeNumber(likeNumber, value) {
    return Number(likeNumber.innerHTML) + value;
  };
  function setLikedStyle(event) {
    event.target.classList.add('liked');
    event.target.style.fill = 'red';
  };
  function unsetLikedStyle(event) {
    event.target.classList.remove('liked');
    event.target.style.fill = '#010101';
  };
  function saveToLocalStorage(newsId, likeFlag) {
    var favoriteNewsNumber = 'ssdnotes_favoriteNews' + newsId.toString();
    var favoriteNews = {
      newsId: newsId,
      liked: likeFlag
    };
    localStorage.setItem(favoriteNewsNumber, JSON.stringify(favoriteNews));
  };

  var config = {
    apiKey: "AIzaSyCMGqBNX-IRkRHwve6POdmx51sW76z4RJw",
    authDomain: "test-a9274.firebaseapp.com",
    databaseURL: "https://test-a9274.firebaseio.com"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  var newsId = document.getElementById('liker').getAttribute('data-news-id');
  var likeIcon = document.getElementById('like-icon');

  database.ref('news/' + newsId).once('value').then(function(snapshot) {
    if (snapshot.val()) {
      var likeNumber = document.getElementById('like-number');
      if (snapshot.val().likeNumber > 0) {
        likeNumber.innerHTML = snapshot.val().likeNumber;
        var favoriteNewsNumber = 'ssdnotes_favoriteNews' + newsId.toString();
        var favoriteNews = JSON.parse(localStorage.getItem(favoriteNewsNumber));

        if (favoriteNews) {
          if (favoriteNews.liked) {
            var likeIconStyle = document.querySelector('.like-icon-style');
            likeIconStyle.classList.add('liked');
            likeIconStyle.style.fill = 'red';
          } else {
            likeNumber.innerHTML = '';
          }
        };
      } else {
        database.ref('news/' + newsId).set({likeNumber: 0});
      }
    }
  });

  likeIcon.addEventListener('click', function(event) {
    if (event.target.classList.contains('liked')) {
      unsetLikedStyle(event);
      var likeNumber = document.getElementById('like-number');
      if (Number(likeNumber.innerHTML) <= 1) {
        likeNumber.innerHTML = '';
      } else {
          likeNumber.innerHTML = changeLikeNumber(likeNumber, -1);
      };
      database.ref('news/' + newsId).set({ likeNumber: likeNumber.innerHTML });
      saveToLocalStorage(newsId, false);
    } else {
      setLikedStyle(event);
      var likeNumber = document.getElementById('like-number');
      likeNumber.innerHTML = changeLikeNumber(likeNumber, 1);
      database.ref('news/' + newsId).set({ likeNumber: likeNumber.innerHTML });
      saveToLocalStorage(newsId, true);
    }
  });

};
