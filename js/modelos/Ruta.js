/**
 * Created by jamarfal on 14/6/17.
 */
/**
 * Clase que implementa rutas individuales
 */
import {Collection, Model} from 'backbone';
import {LocalStorage} from 'backbone.localstorage';
var Ruta = Backbone.Model.extend({
    initialize: function () {
        if (!this.id) this.set('id', _.uniqueId());
        if (!this.has("posiciones")) this.set('posiciones', []);
        if (!this.has("fecha")) this.set('fecha', Date());
    },
    defaults: {
        titulo: 'Undefined',
        visible: 'on',
        color: '#000000',
    },
});
