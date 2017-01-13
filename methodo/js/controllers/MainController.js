app.controller('MainController', ['$scope', function($scope) {
  //$scope.title = 'Bonjour';
  //$scope.promo = 'Thomas';
  $scope.products= 
   [
  { 
    name: 'Motorola XOOM™ with Wi-Fi', 
    price: 19, 
    cover: 'img/phones/motorola-xoom-with-wi-fi.0.jpg',
    likes : 0,
    dislikes : 0
  },
  
  { 
    name: 'MOTOROLA XOOM™', 
    price: 19, 
    cover: 'img/phones/motorola-xoom.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'MOTOROLA ATRIX™ 4G', 
    price: 19, 
    cover: 'img/phones/motorola-atrix-4g.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: ' Dell Streak 7', 
    price: 19, 
    cover: 'img/phones/dell-streak-7.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Samsung Gem™', 
    price: 19, 
    cover: 'img/phones/samsung-gem.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Dell Venue', 
    price: 19, 
    cover: 'img/phones/dell-venue.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Nexus S', 
    price: 19, 
    cover: 'img/phones/nexus-s.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'LG Axis', 
    price: 19, 
    cover: 'img/phones/lg-axis.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Samsung Galaxy Tab™', 
    price: 19, 
    cover: 'img/phones/samsung-galaxy-tab.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Samsung Showcase™ a Galaxy S™ phone', 
    price: 19, 
    cover: 'img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'DROID™ 2 Global by Motorola', 
    price: 19, 
    cover: 'img/phones/droid-2-global-by-motorola.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'DROID™ Pro by Motorola', 
    price: 19, 
    cover: 'img/phones/droid-pro-by-motorola.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'MOTOROLA BRAVO™ with MOTOBLUR™', 
    price: 19, 
    cover: 'img/phones/motorola-bravo-with-motoblur.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Motorola DEFY™ with MOTOBLUR™', 
    price: 19, 
    cover: 'img/phones/motorola-defy-with-motoblur.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'T-Mobile myTouch 4G', 
    price: 19, 
    cover: 'img/phones/t-mobile-mytouch-4g.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Samsung Mesmerize™ a Galaxy S™ phone', 
    price: 19, 
    cover: 'img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'SANYO ZIO', 
    price: 19, 
    cover: 'img/phones/sanyo-zio.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Samsung Transform™', 
    price: 19, 
    cover: 'img/phones/samsung-transform.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'T-Mobile G2', 
    price: 19, 
    cover: 'img/phones/t-mobile-g2.0.jpg',
    likes : 0,
    dislikes : 0
  }, 
  
  { 
    name: 'Motorola CHARM™ with MOTOBLUR™', 
    price: 19, 
    cover: 'img/phones/motorola-charm-with-motoblur.0.jpg',
    likes : 0,
    dislikes : 0
  }
  
  
];
  $scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
  $scope.minusOne = function(index) { 
  $scope.products[index].dislikes += 1; 
};


}]);