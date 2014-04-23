$(document).ready(function(){
	Parse.initialize("c8IKIZkRcbkiMkDqdxkM4fKrBymrX7p7glVQ6u8d", "QrAmmRCYU4bv57FETkKFGiV07aIlJAKjaHKBi2FT");
    
    loadData();
});

function loadData(){
    var DropOffAgency = Parse.Object.extend("DropOffAgency");
    var dropOffAgency = new DropOffAgency();

    dropOffAgency.set("agencyName", "exampleAgency");
    dropOffAgency.set("agencyAddress", "355 Bryant Street, San Francisco, CA");
    dropOffAgency.set("agencyGeoLocation", new Parse.GeoPoint({latitude: 37.783516, longitude: -122.392711}));
	
	dropOffAgency.save(null, {
	success: function(object) {
		$(".success").show();
	},
	error: function(model, error) {
		$(".error").show();
	}});
}
