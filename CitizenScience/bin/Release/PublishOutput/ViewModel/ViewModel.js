function Sighting(date, count, location, name) {
    var self = this;
    self.date = date;
    self.count = count;
    self.location = ko.observable(location);
    self.name = name;
}

function SightingsViewModel() {
    var self = this;
 //Data
    self.location = [
        { locationName: "Tree" },
        { locationName: "Bird Feeder" },
        { locationName: "Telephone Pole" },
        { locationName: "In Flight" }
    ];

   self.sightings = ko.observableArray([
        new Sighting("2017-11-10", 3, self.location[1], "James Adams"),
        new Sighting("2017-08-22", 1, self.location[0], "Alicia Perez")
    ]);

   self.saveButton = ko.observable(false);
   self.success = ko.observable(false);

//Behaviors
    self.addSighting = function () {
        self.sightings.push(new Sighting());
        self.saveButton(true);
        self.success(false);
    }

    self.removeSighting = function (Sighting) {
        self.sightings.remove(Sighting);
    }

    self.Submit = function () {
        self.saveButton(false);
        self.success(true);

    }

    

    
      
    
}


ko.applyBindings(new SightingsViewModel());