import * as request from 'supertest';

import { createApp } from 'app';

describe('app', function() {
    let app = createApp();

    describe('GET /', function() {
        it('responds "Hello World!"', function(done: any) {
            request(app)
                .get('/')
                .expect(200, "Hello World!")
                .end(done);
        });
    });
});
