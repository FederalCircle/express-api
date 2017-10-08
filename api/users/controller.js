'use strict';

const exception = require('../utils/exception.js');

function UsersController() {
    var vm = this;

    vm.users = [];

    vm.getAll = getAll;
    vm.create = create;

    _init();

    ///// Functions /////
    function _init() {
        vm.users = [
            {
                id: 0,
                name: 'Teste',
                age: 20
            }
        ];
    }

    function getAll() {
        return vm.users;
    }

    function create(user) {
        _validate(user);
        user.id = _newId();
        vm.users.push(user);
        return user.id;
    }

    function _validate(user) {
        if(user.id !== undefined) {
            throw exception(400, 'ID must not be set');
        }
        if(!user.name || !user.age) {
            throw exception(400, 'Required fields missing');
        }
    }

    function _newId() {
        return vm.users[vm.users.length-1].id+1 || 0;
    }
}

module.exports = new UsersController;
