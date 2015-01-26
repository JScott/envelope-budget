// Will have some trouble with older browsers
document.addEventListener('DOMContentLoaded', function() {

  function Envelope(data) {
    this.name = ko.observable(data.name);
    this.income = ko.observable(data.income);
    this.startDate = ko.observable(data.startDate)
  }
  
  function EnvelopeListViewModel() {
    var self = this;
    self.envelopes = ko.observableArray([
      new Envelope({name: 'test1', income: 10, startDate: new Date()}),
      new Envelope({name: 'test2', income: 50, startDate: new Date()})
    ]);
    self.newEnvelope = ko.observable({});
  
    self.resetForm = function() {
      self.newEnvelope = {};
    }
  
    self.addEnvelope = function() {
        console.log(this.newEnvelope);
      var newEnvelope = new Envelope(this.newEnvelope);
        console.log(newEnvelope);
        console.log(newEnvelope.name());
      self.envelopes.push(newEnvelope);
        console.log(self.envelopes);
      self.resetForm();
    };
  }
      
  ko.applyBindings(new EnvelopeListViewModel());
});