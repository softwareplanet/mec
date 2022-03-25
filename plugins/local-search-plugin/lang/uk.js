/** @define {boolean} */ const SUPPORT_LANG_UK = true
let FlexSearch = require('flexsearch');

if (SUPPORT_LANG_UK) {
    // noinspection ThisExpressionReferencesGlobalObjectJS
    ; (function (root) {
        FlexSearch.registerLanguage(
            'uk',
        /** @const */ {
                /**
                 * http://www.ranks.nl/stopwords
                 * @type {Array<string>}
                 * @export
                 */

                filter: [
                    'з',
                    'й',
                    'що',
                    'та',
                    'Із',
                    'але',
                    'цей',
                    'коли',
                    'як',
                    'чого',
                    'хоча',
                    'нам',
                    'якої',
                    'чи',
                    'це',
                    'від',
                    'про',
                    'і',
                    'їх',
                    'є',
                    'Інших',
                    'ти',
                    'він',
                    'вона',
                    'воно',
                    'ми',
                    'ви',
                    'вони'
                ],

                /**
                 * @type {Object<string, string>}
                 * @export
                 */
            }
        )
    })(this)
}
