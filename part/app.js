// -----------------------
// Componentes
// -----------------------

// PART NAME
Vue.component('part-name', {
    props: {
        name: String
    },
    template: `<h1 class="part__name">Part {{ name }}</h1>`,
})

// FEATURE NAME
Vue.component('feature-name', {
    template: `
    <h2 :class="featureClass">
        <img src="part/icons/circle.svg" :width="iconSize" :height="iconSize" />
        {{ name }}
        <img :src="featureIcon" :width="iconSize" :height="iconSize" />
    </h2>
    `,
    props: {
        name: String,
        quality: Number
    },
    data() {
        return {
            iconSize: 15 // 15 x 15, iconos cuadrados
        }
    },
    computed: {
        featureClass() {
            return `feature__name feature__name--quality-${this.qualityLabel}`            
        },
        featureIcon() {
            return `part/icons/${this.qualityLabel}.svg`
        },
        qualityLabel(){
            return this.$parent.getQualityLabel(this.quality);
        }
    }
});

// CONTROL HEADER
Vue.component('control-header', {
    template: `
    <div class="feature__header">
        <span class="feature__header-value">Control</span>
        <span class="feature__header-value text-center">Dev</span>
        <span class="feature__header-value text-center">Dev Out Tol</span>
        <span></span>
    </div>
    `
});

// CONTROL
Vue.component('control', {
    props: {
        obj: Object
    },
    data() {
        return {
            iconSize: 15 // 15 x 15, iconos cuadrados
        }
    },
    template: `
    <div class="feature__control">
        <span class="feature__control-value">{{ this.obj.name }}</span>
        <span class="feature__control-value text-center">{{ this.obj.dev }}</span>
        <span class="feature__control-value text-center">{{ this.obj.devOut }}</span>
        <span class="feature__control-quality">
            <img :src="controlIcon" :width="iconSize" :height="iconSize" />
        </span>
    </div>
    `,
    computed: {
        controlIcon(){
            return `part/icons/${this.qualityLabel}_color.svg`;
        },
        qualityLabel(){
            return this.$parent.getQualityLabel(this.obj.quality);
        }
    }
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
                // Creamos nodo de datos en el JSON con controles agrupados de 4 en 4 para cada feature
                // Utilizado método "set" para evitar el uso de "forceUpdate" en el script principal
                this.$set(features[n], 'controlGroups', groups)
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
        getQualityLabel(quality) {
            let qualityLabel = "";
            switch (quality) {
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