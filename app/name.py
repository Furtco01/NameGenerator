import sys 

# Takes first name and last name via command  
# line arguments and then display them 

def print_name():
    print("Output from Python") 
    print("First name: " + sys.argv[1]) 
    print("Last name: " + sys.argv[2])

if __name__ == '__name__':
    # Map command line arguments to function arguments.
    print_name(*sys.argv[1:])
