/**
 * @api {get} localhost:3000/humanAid?countryCode=${countryCode}  url to search by country code
 * @apiGroup Search help by countryCode
 * @apiName pulpomatic
 *
 * @apiParam {String} countryCode the countryCode in this case is SD
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *    {
 *   "success": true,
 *   "data": {
 *       "2016": [
 *           10000,
 *           10455087.89
 *       ],
 *       "2017": [
 *           -95492.14,
 *           -46475.9,
 *           -27618.24,
 *           363539.69
 *       ]
 *      },
 *  }
 */