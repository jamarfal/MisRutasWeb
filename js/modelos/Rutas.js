/**
 * Created by jamarfal on 14/6/17.
 */
/**
 * Define una colección de rutas
 */
var Rutas = Backbone.Collection.extend({
    model: Ruta,
    localStorage : new Backbone.LocalStorage("mis-rutas-backbone"),
    initialize: function () {
        this.on("add", function (model, col, opt) {
            console.log('Rutas:add ' + model.id);
            model.save();
        });
        this.on("remove", function (model, col, opt) {
            console.log('Rutas:remove ' + model.id);
            model.destroy();
        });
        this.on("change", function (model, opt) {
            console.log('Rutas:change ' + model.id);
            model.save();
        });
    },
});