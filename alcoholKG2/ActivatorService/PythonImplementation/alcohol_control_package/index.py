import json
from pathlib import Path
from urllib.parse import urljoin

def read_json_config(config_file_path):
    with open(config_file_path, 'r') as config_file:
        config_content = json.load(config_file)
    return config_content

def qaly_value_module():
    # Assuming qalyValue is a function in qalyValue.py
    from .qalyValue import qalyValue
    return qalyValue

def qalygain(patient_data):
    config_file_path = Path(__file__).parent / 'config.json'
    config = read_json_config(config_file_path)

    qaly_value_function = qaly_value_module()

    output = qaly_outcome(config, patient_data, qaly_value_function)
    return output

def qaly_outcome(config, patient_data, qaly_value_function):
    features = input_features(config, patient_data)
    output = {}

    for output_entry in config['outputs']:
        output_obj = {}
        output_obj['id'] = output_entry['id']
        output_obj['field'] = output_entry['field']
        output_obj['service'] = config['id']
        output_obj['qaly'] = {'gain': qaly_value_function(output_entry, features)}
        output_obj['data_source'] = {
            'updateDate': config['updatedOn'],
            'type': config['datatype']
        }
        output[output_entry['id']] = output_obj

    return output

def input_features(config, patient_data):
    features = {}
    for key in config['columns']:
        features[key] = patient_data['features'][key]
    return features
