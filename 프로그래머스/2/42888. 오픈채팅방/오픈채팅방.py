def solution(record):
    answer = []
    id = {}
    
    for i in record:
        input_data = i.split()
        if input_data[1] not in id:
            id[input_data[1]] = input_data[2]
        else:
            if input_data[0] == "Change" or input_data[0] == "Enter":
                id[input_data[1]] = input_data[2]
                
    for i in record:
        input_data = i.split()
        if input_data[0] == "Enter":
            answer.append(id[input_data[1]] + "님이 들어왔습니다.")
        elif input_data[0] == "Leave":
            answer.append(id[input_data[1]] + "님이 나갔습니다.")

    return answer