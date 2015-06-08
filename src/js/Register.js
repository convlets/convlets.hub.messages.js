var Register = (function () {
    function Register() {
    }
    Object.defineProperty(Register.prototype, "ID", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "TypeID", {
        get: function () {
            return "CAE77047-222F-4FF0-86BB-CD2DD5D21ABF";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "UserName", {
        get: function () {
            return this.username;
        },
        set: function (value) {
            this.username = value;
        },
        enumerable: true,
        configurable: true
    });
    return Register;
})();
