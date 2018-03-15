describe('HTTP Method Test Suite', function() {
	var frisby = require('frisby');

	frisby.create('GET Method')
		  .get('http://localhost:8080')
		  .expectStatus(200)
		  .expectHeaderContains('content-type', 'application/json')
		  .expectJSON({
		      method : 'GET'
		  })
		  .expectJSONTypes({
		  	  method : String
		  }).toss();

	frisby.create('POST Method')
		  .post('http://localhost:8080')
		  .expectStatus(200)
		  .expectHeaderContains('content-type', 'application/json')
		  .expectJSON({
		      method : 'POST'
		  })
		  .expectJSONTypes({
		  	  method : String
		  }).toss();

	frisby.create('PUT Method')
		  .put('http://localhost:8080')
		  .expectStatus(200)
		  .expectHeaderContains('content-type', 'application/json')
		  .expectJSON({
		      method : 'PUT'
		  })
		  .expectJSONTypes({
		  	  method : String
		  }).toss();

	frisby.create('DELETE Method')
		  .delete('http://localhost:8080')
		  .expectStatus(200)
		  .expectHeaderContains('content-type', 'application/json')
		  .expectJSON({
		      method : 'DELETE'
		  })
		  .expectJSONTypes({
		  	  method : String
		  }).toss();
});