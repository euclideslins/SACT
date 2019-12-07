const SectionController = require('./app/controllers/SectionController');
const CriterionController = require('./app/controllers/CriterionController');

module.exports = app => {

    /** SECTION'S ROUTES **/

    app.route('/sections')
       .get(SectionController.index)
       .post(SectionController.store);
    
    app.route('/sections/:id')
       .get(SectionController.show)
       .put(SectionController.update)
       .delete(SectionController.delete);

   /** CRITERION'S ROUTES **/
   
   app.route('/criteria')
      .get(CriterionController.index)
      .post(CriterionController.store);
}