// setting the connection
angular.module('Leaderboard', [])
    .controller('awardsController', AwardsController);


function AwardsController() {
    var vm = this; // added to control scope

    this.newWinner = {};
    this.winners = [
        { name: "Michael Gokey" },
        { name: "George Washington" },
        { name: "Ben Frank" },
        { name: "Gen Bush" },
        { name: "Donny Thumper" },
        { name: "Harry Winston" },
        { name: "Andrew Crater" }
    ];
    this.createNewWinner = createNewWinner;

    function createNewWinner() {
        this.winners.push(this.newWinner);
        this.newWinner = {};
    }
} // AwardsController function