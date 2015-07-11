<link rel="import" href="/resource/polymer1_0_a/components/bower_components/polymer/polymer.html">
<link rel="import" href="/resource/polymer1_0_a/components/bower_components/paper-slider/paper-slider.html">

<dom-module id="dom-element">

  <template>
    <p>I'm a DOM element. This is my local DOM!</p>
    <paper-slider min="10" max="200" value="110" pin></paper-slider>
  </template>

  <script>
    Polymer({
      is: "dom-element"
    });
  </script>

</dom-module>
