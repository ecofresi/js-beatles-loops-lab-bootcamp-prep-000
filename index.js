/*describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });
  
  */
  
function theBeatlesPlay(musicians, instruments) {
  
     var allMusicians = [];
     
     for (var i=0; i < musicians.length; i++) {
         allMusicians.push(musicians[i]  + " plays " + instruments[i]);
     }
     return allMusicians;
 }
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]; 

//theBeatlesPlay(musicians, instruments);

/*  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });
  */
