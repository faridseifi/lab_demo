def qalyValue(output_entry, features):
    if features['alcohol_abuse'] > 0:
        return (
            -0.0688071 * features['age'] +
            0.0570005 * (features['gender'] == 1) -
            0.1667344 * (features['race'] == 1) +
            0.1383614 * (features['race'] == 2) -
            0.0536393 * (features['race'] == 3) -
            0.0257437 * ((features['smokeyear'] > 0) and
                         (features['cigpday'] > 0) and
                         (features['quityear'] == 0)) -
            0.00000938 * features['totalcholesterol'] +
            0.0001198 * features['hdl'] -
            0.0002621 * features['sbp'] +
            0.0139843 * features['htmedication'] -
            0.0316753 * features['diabetes'] +
            5.446518
        )
    else:
        return 0
