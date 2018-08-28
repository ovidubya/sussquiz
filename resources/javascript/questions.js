var sussChocies = ['Chaim', 'Zahava', 'Ovadia', 'Kayla', 'Ezra', 'Tzippy'];
function getWrongChoices(str) {
    var copySussChoices = sussChocies.slice();
    var index = copySussChoices.indexOf(str.capitalize());
    if(index > -1) {
        copySussChoices.splice(index,1);
    }
    return copySussChoices;
}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
function getRealUser(str) {
    if(str == 'Chaim Suss') {
        return 'chaim';
    }
    else if(str == 'Zahava') {
        return 'zahava';
    }
    else if(str == 'OShalom') {
        return 'ovadia';
    }
    else if(str == 'My Wife My Life!') {
        return 'kayla'
    }
    else if(str.includes('+')) {
        return 'tzippy'
    }
    else if(str == 'Tzippy Suss') {
        return 'tzippy';
    }
    else if(str == 'Ezra Suss Summer Number') {
        return 'ezra'
    }
    else if(str == 'Ezra Suss 2') {
        return 'ezra'
    }
}