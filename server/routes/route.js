const routes=require('express').Router();
const controller=require("../controller/controller")

routes.route('/api/scrapping')
    .post(controller.create_scrapping);

routes.route('/api/summary')
    .post(controller.create_summary);

routes.route('/api/sentiment')
    .post(controller.create_sentiment);

routes.route('/api/entity')
    .get(controller.create_entities);

routes.route('/api/competitors')
    .get(controller.create_competitors);


// routes.route('/api/sentiment')
//     .get(controller.create_sentiment);

routes.route('/api/phrases')
    .get(controller.create_phrases);





module.exports=routes;
