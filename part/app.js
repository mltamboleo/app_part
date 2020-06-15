// -----------------------
// Componentes
// -----------------------

// CONTROL HEADER
Vue.component('control-header', {
    template: '<div class="feature__header"><span class="feature__header-value">Control</span><span class="feature__header-value text-center">Dev</span><span class="feature__header-value text-center">Dev Out Tol</span><span></span></div>'
});

// FEATURE NAME
Vue.component('feature-name', {
    props: {
        name: String,
        qualityLabel: String
    },
    template: '<h2 :class="\'feature__name feature__name--quality-\' + qualityLabel"><img src="part/icons/circle.svg" width="15" height="15" />{{ name }}<img :src="\'part/icons/\' + qualityLabel + \'.svg\'" width="15" height="15" /></h2>',
});

// CONTROL
Vue.component('control', {
    props: {
        name: String,
        dev: Number,
        devOut: Number,
        qualityLabel: String
    },
    template: '<div class="feature__control"><span class="feature__control-value">{{ name }}</span><span class="feature__control-value text-center">{{ dev }}</span><span class="feature__control-value text-center">{{ devOut }}</span><span class="feature__control-quality"><img :src="\'part/icons/\' + qualityLabel + \'_color.svg\'" width="15" height="15" /></span></div>'
});

// -----------------------
// App
// -----------------------
var app = new Vue({
    el: '#app',
    mounted() {
        this.fetchData(); // Agrupamos controls de 4 en 4
    },
    data: { // Mockup de los datos recibidos desde BACK
        "part": {
            "name": "A",
            "features": [
                {
                    "name": "seam",
                    "quality": 2,
                    "controls": [
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                    ],
                },
                {
                    "name": "slot",
                    "quality": 1,
                    "controls": [
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        }
                    ]
                },
                {
                    "name": "hole",
                    "quality": 2,
                    "controls": [
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                    ]
                },
                {
                    "name": "feature A",
                    "quality": 1,
                    "controls": [
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        }
                    ]
                },
                {
                    "name": "feature B",
                    "quality": 0,
                    "controls": [
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 0
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        }
                    ]
                },
                {
                    "name": "feature C",
                    "quality": 0,
                    "controls": [
                        {
                            "name": "x",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        },
                        {
                            "name": "y",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "z",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 2
                        },
                        {
                            "name": "diameter",
                            "dev": 0,
                            "devOut": 0,
                            "quality": 1
                        }

                    ]
                }
            ]
        }
    },
    methods: {
        randomData() { // Refresco aleatorio de datos cada 10 seg.
            let part = this.part;
            let features = part.features;

            for (n = 0; n < features.length; n++) {

                let quality = Math.floor((Math.random() * 3));
                features[n].quality = quality;

                let controls = features[n].controls;
                for (i = 0; i < controls.length; i++) {
                    let dev = Math.floor((Math.random() * 2));
                    controls[i].dev = dev;
                    let devOut = Math.floor((Math.random() * 2));
                    controls[i].devOut = devOut;
                    let quality = Math.floor((Math.random() * 3));
                    controls[i].quality = quality;
                }
            }
            this.fetchData();
        },
        fetchData() {

            let part = this.part;
            let features = part.features;

            for (n = 0; n < features.length; n++) {

                let controls = features[n].controls;
                let groups = [];

                var i, j, temparray, chunk = 4;
                for (i = 0, j = controls.length; i < j; i += chunk) {
                    temparray = controls.slice(i, i + chunk);
                    groups.push(temparray);
                }
                features[n].controlGroups = groups; // Creamos nodo de datos en el JSON con controles agrupados de 4 en 4 para cada feature
            }
            let _this = this;
            setTimeout(function () { _this.randomData() }, 10000);
        },
        gridSpan(feature) {
            let c_length = feature.controls.length;
            if (c_length > 12) { return 'feature--wide feature--tall' }
            if (c_length > 4) { return 'feature--tall' }
        },
        hasTwoColumns(feature) {
            let c_length = feature.controls.length;
            return c_length > 12;
        },
        getQualityLabel(obj) {
            let q = obj.quality; // 0, 1 o 2
            let qualityLabel = "";
            switch (q) {
                case 0: {
                    qualityLabel = "bad";
                    break;
                }
                case 1: {
                    qualityLabel = "average";
                    break;
                }
                case 2: {
                    qualityLabel = "good";
                    break;
                }
            }
            return qualityLabel
        }
    },
});
app.$forceUpdate();