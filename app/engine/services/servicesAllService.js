"use strict";
/**
 * Возвращает объект, однако для этого должно быть явно
 * указано return [Object] (суть метода)
 * Если возвращается this, объект также содержит метод $get
 * https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
 */
// ■
app.factory('servicesAllFactory', function(){
    var standard = true,
        _name = "srgg";
    /**
     * стандартный factory-стиль */
    if(standard){
        var serviceFactory = {};

        serviceFactory.getName = function(){
            return _name;
        };
        serviceFactory.setName = function(new_name){
            _name = new_name;
        };
        return serviceFactory;
    }else{
        // альтернативный стиль
        this.getFactoryName = function(){
            return _name;
        };
        this.setFactoryName = function(new_name){
            _name = new_name;
        };
        return this;
    }
});
/**
 * Возвращает экземпляр объекта:
 * Если @return не использован ─ this (стандартное поведение)
 * Иначе ─ указанный объект (factory-стиль)
 * Можно вернуть несколько объектов.
 * В этом случае возвращается экземпляр this и остальные объекты
 * как есть */
// ■ нет смысла использовать, если нужно вернуть НЕ объект (например ─ литерал)
app.service('servicesAllService', function(){

    var standard = true,
        _name = "srgg";
    /**
     * стандартное поведение, контроллеру передаётся
     * экземпляр текущего объекта (this), return
     * не требуется */
    if(standard){
        this.getName = function(){
            return _name;
        };
        this.setName = function(new_name){
            _name = new_name;
        };
    }
    if(standard!==true){
        /**
         * Поведение в стиле factory
         * Требуется явное указание return @object
         * Так же возвращается экземпляр объекта */
        var serviceFactory = {};
        serviceFactory.getServiceName = function(){
            return _name;
        };
        serviceFactory.setServiceName = function(new_name){
            _name = new_name;
        };
        return serviceFactory;
    }
});

app.provider('servicesAllProvider', function(){
    var _name = "srgg", _last_name = "6701";
    this.conf = '';
    this.setConf = function(new_conf_value){
        this.conf = new_conf_value;
    };
    this.$get = function(){
        var newConfig = this.conf;
        return {
            getName : function(){
                return _name;
            },
            setName : function(new_name){
                _name = new_name;
            },
            providerConfig : newConfig
        }
    };
});
app.config(function(servicesAllProviderProvider){
    servicesAllProviderProvider.conf = "Hello, Dude!";
    //console.log('servicesAllProvider', servicesAllProviderProvider);
});

