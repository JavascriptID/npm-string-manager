import * as _httpquery from './modules/httpquery'
import * as _camelcase from './modules/camelcase'
import * as _html from './modules/html'
import * as _spaces from './modules/spaces'
import * as _truncate from './modules/truncate'
import * as _slug from './modules/slug'

function StringManager(str) {
    this.data = str
    return this.data
}

function prototypeBuilder(module) {
    return function(...args) {
        return new StringManager(module(this.data, ...args))
    }
}

StringManager.prototype.toString = (...args)  => { return this.data }
StringManager.prototype.objToQuery = prototypeBuilder(_httpquery.objToQuery)
StringManager.prototype.queryToObj = prototypeBuilder(_httpquery.queryToObj)
StringManager.prototype.toCamelCase = prototypeBuilder(_camelcase.toCamelCase)
StringManager.prototype.stripTags = prototypeBuilder(_html.stripTags)
StringManager.prototype.toSingleSpace = prototypeBuilder(_spaces.toSingleSpace)
// StringManager.prototype.truncate = prototypeBuilder(_truncate.truncate)
StringManager.prototype.toSlug = prototypeBuilder(_slug.toSlug)

export {toCamelCase} from './modules/camelcase'
export {objToQuery, queryToObj} from './modules/httpquery'
export {stripTags} from './modules/html'
export {toSingleSpace} from './modules/spaces'
export {truncate} from './modules/truncate'
export {toSlug} from './modules/slug'

export default str => { return new StringManager(str)}