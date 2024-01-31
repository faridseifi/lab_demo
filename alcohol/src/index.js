//const config = require('./config.json')
const configFilePath = new URL('./config.json', import.meta.url).pathname;
const configFileContent = Deno.readTextFileSync(configFilePath);
const config = JSON.parse(configFileContent);

//const qalyValue = require('./qalyValue.js')
import {qalyValue} from "./qalyValue.js"

export function qalygain(patientData) {
    let output = qalyOutcome(config, patientData)
    return output
}



function qalyOutcome(config, patientData) {
    var features = inputFeatures(config, patientData)
    var output = {}

    config.outputs.forEach(function (outputEntry) {
        let outputObj = {}
        outputObj.id = outputEntry.id
        outputObj.field = outputEntry.field
        outputObj.service = config.id
        outputObj.qaly = {}
        outputObj.qaly.gain = qalyValue(outputEntry, features)
        outputObj.data_source = {}
        outputObj.data_source.updateDate = config.updatedOn
        outputObj.data_source.type = config.datatype
        output[outputEntry.id] = outputObj
    })

    return output
}

function inputFeatures(config, patientData) {
    let features = {};
    Object.keys(config.columns).forEach(function (key) {
        features[key] = patientData.features[key]
    })
    return features

}
