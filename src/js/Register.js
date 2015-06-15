var Register = (function () {
    function Register(username, phoneNumber, password, confirmedPassword) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.confirmedPassword = confirmedPassword;
        this.id = Guid.newGuid();
        this.typeID = "CAE77047-222F-4FF0-86BB-CD2DD5D21ABF";
    }
    return Register;
})();
