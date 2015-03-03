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
        "cover": {"title": "<h4>THEME</h4><hr /><p>Stephanie Dola</p>", "class": "hex-1"},
        "photo": [
          {"imgur": "http://i.imgur.com/yIoACHc.gif"},
          {"imgur": "http://i.imgur.com/uINck6K.gif"}
        ]
      },
      {
        "cover": {"title": "<h4>THEME</h4><hr /><p>萌～萌～哒～</p>", "class": "hex-2"},
        "photo": [
          {"imgur": "http://i.imgur.com/YSmWA3g.gif"},
          {"imgur": "http://i.imgur.com/6G4BDxU.gif"},
          {"imgur": "http://i.imgur.com/kuH4XVL.gif"}
        ]
      },
      {
        "cover": {"title": "<h4>THEME</h4><hr /><p>其他</p>", "class": "hex-3"},
        "photo": [
          {"imgur": "http://i.imgur.com/vpKzynV.gif"},
          {"imgur": "http://i.imgur.com/J2Dllne.gif"}
        ]
      }
  ]
}
	   </script>
     ...
</body>
```