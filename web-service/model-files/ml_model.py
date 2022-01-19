import pickle

def predict(data): 
    ##loading the model from the saved file
    with open('model.bin', 'rb') as f_in:
        model = pickle.load(f_in)
    
    ##prediting values with the saved model
    return model.predict(data)