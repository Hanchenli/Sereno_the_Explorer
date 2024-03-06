def main():
    import os
    import time
    import sys
    import leslie_rogers

    start_time = time.time()
    print(start_time)
    
    client = OpenAI()

    i = 0
    history = []
    original_prompt = ""
    for prompt in leslie_rogers.prompts:
        original_prompt+=(prompt)

    a = {'role': 'user', 'content': original_prompt}
    history.append(a)
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=history
    )
    history.append(completion.choices[0].message)
    print(completion.choices[0].message)
    print()

    while i < 10:
        i += 1
        try:
            # Read a line of input from the user
            input_line = input("Your response is: ")

            a = {'role': 'user', 'content': input_line}
            history.append(a)
            completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=history
            )
            history.append(completion.choices[0].message)
            print(completion.choices[0].message)
            print()
            print()


            
        
        except KeyboardInterrupt:
            # Handle the case where the user tries to interrupt the program (e.g., by pressing Ctrl+C)
            print("\nProgram interrupted. Exiting.")
            break

if __name__ == "__main__":
    from openai import OpenAI
    
    main()