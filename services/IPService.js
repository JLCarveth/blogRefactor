/**
 * Handles the business logic for IP addresses.
 * IPService can ban and unban IP addresses, as well as see if an IP address
 * has been banned.
 * 
 * @module IPService
 * @author John L. Carveth
 */
module.exports = class IPService {
    /**
     * @constructor IPService
     * @param {IPModel} ipModel 
     */
    constructor (ipModel) {
        this.ipModel = ipModel
    }

    /**
     * Bans an IP address
     * @memberof module:IPService
     * @function banAddress
     * @param {*} address an IPv4 or IPv6 address
     * @param {*} reason optional reason for being banned
     */
    async banAddress (address, reason) {
        return this.ipModel.create({
            address: address,
            reason: reason
        })
    }

    /**
     * Unbans an IP address
     * @memberof module:IPService
     * @function unbanAddress
     * @param {*} address an IPv4 or IPv6 address
     */
    async unbanAddress (address) {
        return this.ipModel.deleteOne({address:address}).exec()
    }

    /**
     * Checks if given address is banned
     * @memberof module:IPService
     * @function checkAddress
     * @param {*} address the address to check
     * @return true if the address is found in the collection
     */
    async checkAddress (address) {
        return this.ipModel.findOne({address:address}).exec()
    }
}