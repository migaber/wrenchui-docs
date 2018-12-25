---
path: "/docs/alerts"
date: "2017-11-07"
title: "Alerts"
---
# Alerts

## Usage
This component has the following classes
* `c-alert` this is the main component class, this class has no padding or margin specs, so
all spacing properties MUST be added using utilities classes, along with this class you need to
specify the color of the alert, there are 4 variations `c-alert--info`, `c-alert--success`, `c-alert--warning`
and `c-alert--error`

* `c-alert__state`, `c-alert__icon` containers for the alert type Icons, it has no variations

* `c-alert__content` container for the alert message, it may have two childs
  * `c-alert__message` this is required to place the message text into it
  * `c-alert__action` if you need to attach an action for your alert, place it inside this class
      * `c-alert__action-button` this is a custom style for the alert button, you need to add `o-link`
      to remove the pre-styled button look of this class     

```html
<div class="c-alert c-alert--info u-bottom-margin--2x">
  <div class="c-alert__state">
    <svg class="c-alert__icon"><!-- SVG icon goes here --></svg>
  </div>

  <div class="c-alert__content">
    <div class="c-alert__message">
      Alert message goes here
    </div>

    <div class="c-alert__action">
      <a class="c-alert__action-button o-link o-link--underline">Action</a>
    </div>
  </div>
</div>
```

## Demo
<div class="c-alert c-alert--same-bg c-alert--info u-bottom-margin--2x">
  <div class="c-alert__state">
    <svg class="c-alert__icon" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
    <title>Icons / Info</title>
    <desc>Created with Sketch.</desc>
    <defs>
    <path d="M11.9996614,4 C7.58196825,4 4,7.58196825 4,11.9996614 C4,16.4173545 7.58196825,20 11.9996614,20 C16.4173545,20 20,16.4173545 20,11.9996614 C20,7.58196825 16.4173545,4 11.9996614,4 Z M13.6650159,16.3983915 C13.2532487,16.5609312 12.9254603,16.6841905 12.679619,16.7695238 C12.434455,16.8548571 12.1493333,16.8975238 11.8249312,16.8975238 C11.3264762,16.8975238 10.9384127,16.775619 10.6620952,16.5324868 C10.3857778,16.2893545 10.2482963,15.9812063 10.2482963,15.6066878 C10.2482963,15.4610794 10.258455,15.3120847 10.2787725,15.160381 C10.2997672,15.0086772 10.3329524,14.8380106 10.378328,14.6463492 L10.8937143,12.8259048 C10.9390899,12.6511746 10.9783704,12.4852487 11.0095238,12.330836 C11.0406772,12.1750688 11.0555767,12.0321693 11.0555767,11.9021376 C11.0555767,11.6705185 11.0074921,11.5079788 10.912,11.4165503 C10.8151534,11.3251217 10.6329735,11.2804233 10.3613968,11.2804233 C10.2286561,11.2804233 10.0918519,11.3000635 9.95166138,11.3413757 C9.8128254,11.3840423 9.69227513,11.4226455 9.59339683,11.4605714 L9.72952381,10.8998095 C10.0667937,10.762328 10.3898413,10.6444868 10.6979894,10.546963 C11.0061376,10.4480847 11.2973545,10.3993228 11.5716402,10.3993228 C12.066709,10.3993228 12.4486772,10.519873 12.717545,10.7582646 C12.9850582,10.9973333 13.1198307,11.3081905 13.1198307,11.6901587 C13.1198307,11.7693968 13.1103492,11.9089101 13.0920635,12.1080212 C13.0737778,12.3078095 13.0392381,12.4899894 12.9891217,12.6572698 L12.4764444,14.4722963 C12.434455,14.6179048 12.3972063,14.7845079 12.3633439,14.9707513 C12.3301587,15.1569947 12.3139048,15.2992169 12.3139048,15.394709 C12.3139048,15.6358095 12.3674074,15.800381 12.4757672,15.887746 C12.5827725,15.9751111 12.7703704,16.0191323 13.0358519,16.0191323 C13.1611429,16.0191323 13.3013333,15.9967831 13.4598095,15.9534392 C13.6169312,15.9100952 13.730709,15.8714921 13.8024974,15.8383069 L13.6650159,16.3983915 Z M13.5742646,9.03128042 C13.3351958,9.25341799 13.0473651,9.36448677 12.7107725,9.36448677 C12.3748571,9.36448677 12.0849947,9.25341799 11.8438942,9.03128042 C11.6041481,8.80914286 11.4829206,8.53892063 11.4829206,8.22332275 C11.4829206,7.90840212 11.6048254,7.63750265 11.8438942,7.41333333 C12.0849947,7.18848677 12.3748571,7.07674074 12.7107725,7.07674074 C13.0473651,7.07674074 13.335873,7.18848677 13.5742646,7.41333333 C13.8133333,7.63750265 13.9332063,7.90840212 13.9332063,8.22332275 C13.9332063,8.53959788 13.8133333,8.80914286 13.5742646,9.03128042 Z" id="path-1"></path>
    </defs>
    <g id="Icons-/-Info" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <mask id="mask-2" fill="white">
    <use xlink:href="#path-1"></use>
    </mask>
    <use id="Mask" fill="currentColor" fill-rule="nonzero" xlink:href="#path-1"></use>
    </g>
    </svg>
  </div>

  <div class="c-alert__content">
    <div class="c-alert__message">
      This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message This is the new info message
    </div>
    <div class="c-alert__action">
      <a type="button" class="c-alert__action-button o-link o-link--underline">Action</a>
    </div>
  </div>
</div>

<div class="c-alert c-alert--same-bg c-alert--warning u-bottom-margin--2x">
  <div class="c-alert__state">
    <svg
      class="c-alert__icon"
      id="Capa_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 483.537 483.537"
      style="enable-background:new 0 0 483.537 483.537;"
      xml:space="preserve">
      <path
      fill="currentColor"
      d="M479.963,425.047L269.051,29.854c-5.259-9.88-15.565-16.081-26.782-16.081h-0.03
      c-11.217,0-21.492,6.171-26.782,16.051L3.603,425.016c-5.046,9.485-4.773,20.854,0.699,29.974
      c5.502,9.15,15.413,14.774,26.083,14.774H453.12c10.701,0,20.58-5.594,26.083-14.774
      C484.705,445.84,484.979,434.471,479.963,425.047z M242.239,408.965c-16.781,0-30.399-13.619-30.399-30.399
      c0-16.78,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399C272.638,395.346,259.02,408.965,242.239,408.965z
      M272.669,287.854c0,16.811-13.649,30.399-30.399,30.399c-16.781,0-30.399-13.589-30.399-30.399V166.256
      c0-16.781,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399V287.854z"/>
    </svg>
  </div>

  <div class="c-alert__content">
    <div class="c-alert__message">This is the new warning message</div>
    <div class="c-alert__action">
      <a type="button" class="c-alert__action-button o-link o-link--underline">Action</a>
    </div>
  </div>
</div>

<div class="c-alert c-alert--same-bg c-alert--success u-bottom-margin--2x">
  <div class="c-alert__state">
    <?xml version="1.0" encoding="utf-8"?> <!-- Generator: IcoMoon.io --> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg
    class="c-alert__icon"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="#000000">
    <path fill="currentColor" d="M 463.968,136.496l-34.144-34.144c-6.304-6.288-16.48-6.288-22.768,0.00L 202.336,307.072 L 104.96,208.992c-6.288-6.288-16.464-6.288-22.768,0.00l-34.144,34.144c-6.288,6.304-6.288,16.48,0.00,22.768l 142.784,143.744 c 6.288,6.288, 16.48,6.288, 22.768,0.00L 463.968,159.264C 470.256,152.992, 470.256,142.784, 463.968,136.496z" ></path></svg>
  </div>

  <div class="c-alert__content">
    <div class="c-alert__message">This is the new success message</div>
    <div class="c-alert__action">
      <a type="button" class="c-alert__action-button o-link o-link--underline">Action</a>
    </div>
  </div>
</div>

<div class="c-alert c-alert--same-bg c-alert--error u-bottom-margin--2x">
  <div class="c-alert__state">
    <svg
    class="c-alert__icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 11 10.688">
    <path fill="currentColor" d="M10.714,1.608 L6.871,5.338 L10.714,9.068 L10.714,9.068 C10.889,9.239 10.998,9.474 10.998,9.734 C10.998,10.255 10.563,10.677 10.028,10.677 C9.759,10.677 9.517,10.571 9.341,10.401 L9.341,10.401 L5.499,6.670 L1.657,10.401 L1.657,10.401 C1.481,10.571 1.238,10.677 0.970,10.677 C0.434,10.677 0.000,10.255 0.000,9.734 C0.000,9.474 0.109,9.239 0.284,9.068 L0.284,9.068 L4.127,5.338 L0.284,1.608 L0.284,1.608 C0.109,1.438 0.000,1.202 0.000,0.942 C0.000,0.422 0.434,0.000 0.970,0.000 C1.238,0.000 1.481,0.106 1.657,0.276 L1.657,0.276 L5.499,4.006 L9.341,0.276 L9.341,0.276 C9.517,0.106 9.759,0.000 10.028,0.000 C10.563,0.000 10.998,0.422 10.998,0.942 C10.998,1.202 10.889,1.438 10.714,1.608 L10.714,1.608 Z" />
    </svg>
  </div>

  <div class="c-alert__content">
    <div class="c-alert__message">This is the new error message</div>
    <div class="c-alert__action">
      <a type="button" class="c-alert__action-button o-link o-link--underline">Action</a>
    </div>
  </div>
</div>
