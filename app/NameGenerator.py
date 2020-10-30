#Name Generator application

#imports
import random
import sys

#Array containing male first names list
#male_first_names = ["James","Jon","Rob","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Dan","Matthew","Anthony","Donald","Mark","Paul","Steven","Andrew","Kenneth","Joshua","Kevin","Brian","George","Edward","Ronald","Tim","Jason","Jeffrey","Ryan","Jacob","Gary"]
#,Nicholas,Eric,Jonathan,Stephen,Larry,Justin,Scott,Brandon,Benjamin,Samuel,Frank,Gregory,Raymond,Alexander,Patrick,Jack,Dennis,Jerry"]

#Array containing female first names list
#female_first_names = ["Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen","Nancy","Lisa","Margaret","Betty","Sandra","Ashley","Dorothy","Kimberly","Emily","Donna","Michelle","Carol","Amanda","Melissa","Deborah","Stephanie","Rebecca","Laura","Sharon","Cynthia","Kathleen","Amy","Shirley"]
#,Angel,Helen,Anna,Brenda,Pamela,Nicole,Samantha,Katherine,Emma,Ruth,Christine,Catherine,Debra,Rachel,Carolyn,Janet,Virginia"]

#Array containing last names

last_names = ["Nye","Kay","Lee","Doe","Orr","Poe","Sim","Cunningham","Cox","Tan","Anderson",
              "Nguyen","Jackson","Art","Yaegermanjensen","Martin","Thompson","Day","Martinez",
              "Robinson","Ono","Rodriguez","Lewis","Lee","Walker","Hall","Fox","Young","Hernandez",
              "Ali","Wright","Ray", "Ash","Gonzalez","Bai", "Nelson","Law","Mitchell","Coy","Turner",
              "Dam","Collins"]
#,Hill,Scott,Green,Adams,Baker,Carter,Perez,Roberts,Turner,Phillips,Campbell,Parker,Evans,Edwards]

#Array containing diverse names
diverse_male_first_names = ["Alasdair", "Kit", "Taj", "Beckett","Eli", "Caspar", "Calvin","Cedric",
                            "Darius", "Jay", "Doutzen", "Emmanuelle", "Van", "Dan","Fin", "Francisco",
                            "Wes", "Giancarlo","Sid", "Ike", "Langley","Lazaro","Leo","Ace","Ari",
                            "Schmidty", "Huy","Angel","Cam","Pablo","Ira","Christoff","Gus","Samuel",
                            "Jax","Robert"]

#Array containing diverse names
diverse_female_first_names = ["Alessandra", "Allegra", "Arizona", "Brooklyn","Bay", "Ada", "Sia",
                              "Camilla","Constance", "Dot", "Bea", "Elektra", "Fay", "Fabiola","Gisele",
                               "Liv", "Nya","Jemima","Sky", "Lux", "Leela","Lila Grace","Ula","Olympia",
                               "Pax","Zoe","Aja","Pamela","Bev","Brenda","Gia","Ruth","Isa","Virginia",
                               "Lyn","Helen"]

#initialize gender and name length variables

gender = sys.argv[1]
name_length = sys.argv[2]

def name_generator(gender,name_length):

    if gender == 'Male':
        first_name_letter_count = 0
        last_name_letter_count = 0
        first_male_name = ""
        last_male_name = ""
        first_name = ""
        last_name = ""
        char_thresh = 3
        if name_length == 'Long':
            first_male_name = random.choice(diverse_male_first_names)
            last_male_name = random.choice(last_names)
            for x in first_male_name:
                first_name_letter_count += 1
            while(first_name_letter_count <= char_thresh and first_name_letter_count is not None):
                first_male_name = random.choice(diverse_male_first_names)
                first_name_letter_count = len(first_male_name)
            if first_name_letter_count >= 4 and first_name_letter_count is not None:
                first_name = first_male_name
            for x in last_male_name:
                last_name_letter_count += 1
            while(last_name_letter_count <= char_thresh and first_name_letter_count is not None):
                last_male_name = random.choice(last_names)
                last_name_letter_count = len(last_male_name)
            if last_name_letter_count >= 4 and last_name_letter_count is not None:
                last_name = last_male_name
        elif name_length == 'Short':
            first_male_name = random.choice(diverse_male_first_names)
            last_male_name = random.choice(last_names)
            for x in first_male_name:
                first_name_letter_count += 1
            while(first_name_letter_count > char_thresh):
                first_male_name = random.choice(diverse_male_first_names)
                first_name_letter_count = len(first_male_name)
            if first_name_letter_count <= 3 and first_name_letter_count is not None:
                first_name = first_male_name
            for x in last_male_name:
                last_name_letter_count += 1
            while(last_name_letter_count > char_thresh):
                last_male_name = random.choice(last_names)
                last_name_letter_count = len(last_male_name)
            if last_name_letter_count <= 3 and last_name_letter_count is not None:
                last_name = last_male_name
    if gender == 'Female':
        first_name_letter_count = 0
        last_name_letter_count = 0
        first_female_name = ""
        last_female_name = ""
        first_name = ""
        last_name = ""
        char_thresh = 3
        if name_length == 'Long':
            first_female_name = random.choice(diverse_female_first_names)
            last_female_name = random.choice(last_names)
            for x in first_female_name:
                first_name_letter_count += 1
            while(first_name_letter_count <= char_thresh):
                first_female_name = random.choice(diverse_female_first_names)
                first_name_letter_count = len(first_female_name)
            if first_name_letter_count >= 4 and first_name_letter_count is not None:
                first_name = first_female_name
            for x in last_female_name:
                last_name_letter_count += 1
            if last_name_letter_count <= char_thresh:
                while(last_name_letter_count <= char_thresh):
                    last_female_name = random.choice(last_names)
                    last_name_letter_count = len(last_female_name)
                    if last_name_letter_count >= 4 and last_name_letter_count is not None:
                        last_name = last_female_name
                        break
            else:
                last_name = last_female_name
        elif name_length == 'Short':
            first_female_name = random.choice(diverse_female_first_names)
            last_female_name = random.choice(last_names)
            for x in first_female_name:
                first_name_letter_count += 1
            while(first_name_letter_count > char_thresh and first_name_letter_count is not None):
                first_female_name = random.choice(diverse_female_first_names)
                first_name_letter_count = len(first_female_name)
            if first_name_letter_count <= 3 and first_name_letter_count is not None:
                first_name = first_female_name
            for x in last_female_name:
                last_name_letter_count += 1
            while(last_name_letter_count > char_thresh and first_name_letter_count is not None):
                last_female_name = random.choice(last_names)
                last_name_letter_count = len(last_female_name)
            if last_name_letter_count <= 3 and last_name_letter_count is not None:
                last_name = last_female_name
    print(first_name, last_name)

#####Function call to allow subprocess to call python file with user selected values
name_generator(gender, name_length)
#name_generator('Female', 'Long')

#####
#Helper funciton to count items in name arrays
#####

def count_names(name_array):
    name_count = 0
    long_name_count = 0
    short_name_count = 0
    for x in name_array:
        name_count += 1
        letter_count = 0
        for y in x:
            letter_count += 1
        if letter_count > 3:
            long_name_count += 1
        else:
            short_name_count += 1


    print(name_count,long_name_count, short_name_count)

#count_names(diverse_male_first_names)


# #####
#letter counter helper function for name_generator to cut down on conditionals
#####
#def letter_counter():
#   first_name_letter_count = 0
#    last_name_letter_count = 0
#   first_male_name = random.choice(_male_first_names)
#    last_male_name = random.choice(last_names)
#    for x in first_male_name:
#        print(first_male_name)
#        first_name_letter_count += 1
#        print(first_name_letter_count)
#        if first_name_letter_count >= 4:
#            print(first_name_letter_count)
#            long_male_first_name = first_male_name
#            return long_male_first_name
#        else:
#            short_male_first_name = first_male_name
#            return short_male_first_name
#    for x in last_male_name:
#        last_name_letter_count += 1
#        if last_name_letter_count >= 4:
#            long_male_last_name = last_male_name
#            return long_male_last_name
#        else:
#            short_male_last_name = last_male_name
#            return short_male_last_name
#
#letter_counter()

#####
#Name generator without using random.choice
#####

#def name_generator2(gender):
    #name_length = input("Would you like a short name or a long name?")
    #gender = input("Is the name for a man or a woman? ")
#    if gender == 'man':
#       i = random.randint(0,30)
#        for x in diverse_male_first_names:
#            first_name_index = diverse_male_first_names.index(x)
#            for y in last_names:
#                last_name_index = last_names.index(y)
#                if i == first_name_index and i == last_name_index:
#                    print (x,y)
#        if name_length == 'long':
#            for x in diverse_male_first_names:
#                for y in x:
#                    if y >= 4:
#                        print(x)
#    elif gender == 'woman':
#        i = random.randint(0,10)
#        for x in diverse_female_first_names:
#            first_name_index = diverse_female_first_names.index(x)
#            for y in last_names:
#                last_name_index = last_names.index(y)
#                if i == first_name_index and i == last_name_index:
#                    print(x,y)
#
#name_generator2('man')
