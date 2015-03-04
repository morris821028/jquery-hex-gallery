jquery-hex-gallery
==================

create beautiful hexagon shapes with CSS3, jquery

* [Demo page 1](http://morris821028.github.io/jquery-hex-gallery/)
* [Demo page 2](http://morris821028.github.io/picture/)

## Usage ##

### javascript ###

in header
```
<script src="js/jquery.hex.gallery.js" type="text/javascript"></script>	
<script src="js/jquery.lazyload.js" type="text/javascript"></script> 
<script src="js/jquery.als.link-1.6.js" type="text/javascript"></script> 
```

### css ###
```
<link rel="stylesheet" href="css/style.css">
```

### html ###
```
<body>
	...
	     <script type="text/hex-gallery">
{
  "album" : [
      {
        "cover": {"title": "<p>Stephanie Dola</p>", "class": "hex-1", "img" : "http://i.imgur.com/xaykK2s.jpg"},
        "photo": [
          {"imgur": "http://i.imgur.com/yIoACHc.gif"},
          {"imgur": "http://i.imgur.com/uINck6K.gif"},
          {"imgur": "http://i.imgur.com/zOZJEex.gif"}
        ]
      },
      {
        "cover": {"title": "<p>Moe Moe</p>", "class": "hex-1", "img": "http://i.imgur.com/SOjLn66.jpg"},
        "photo": [
          {"imgur": "http://i.imgur.com/YSmWA3g.gif"},
          {"imgur": "http://i.imgur.com/6G4BDxU.gif"},
          {"imgur": "http://i.imgur.com/kuH4XVL.gif"},
          {"imgur": "http://i.imgur.com/0NemOhQ.gif"},
          {"imgur": "http://i.imgur.com/tedXr7Y.gif"},
          {"imgur": "http://i.imgur.com/5IHR8bQ.gif"}
        ]
      },
      {
        "cover": {"title": "<p>Chiyo Gekkan</p>", "class": "hex-1", "img": "http://i.imgur.com/FbZZuQC.png"},
        "photo": [
          {"imgur": "http://i.imgur.com/dCw8LFb.gif"},
          {"imgur": "http://i.imgur.com/ZtHGJYd.gif"},
          {"imgur": "http://i.imgur.com/4eZyFHp.gif"}
        ]
      },
      {
        "cover": {"title": "<p>Other</p>", "class": "hex-1", "img": "http://i.imgur.com/FbZZuQC.png"},
        "photo": [
          {"imgur": "http://i.imgur.com/vpKzynV.gif"}
        ]
      }
  ]
}
	   </script>
     ...
</body>
```