/**
 * Contains the miscellaneous route handlers.
 * @author Benjamin Alfayo <https://github.com/Jujutsualfayo>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;